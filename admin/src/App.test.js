import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Firebase so the test does not need a real project config or network.
// onAuthStateChanged reports "no user", so App shows the login screen.
jest.mock('firebase', () => {
  const auth = {
    currentUser: undefined,
    onAuthStateChanged: jest.fn((callback) => {
      callback(null);
      return () => {};
    }),
    signInWithEmailAndPassword: jest.fn(() => Promise.resolve()),
  };
  return {
    __esModule: true,
    default: { auth: () => auth },
  };
});

test('renders the sign-in screen when no user is logged in', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
