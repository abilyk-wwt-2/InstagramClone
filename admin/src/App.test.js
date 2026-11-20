import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Firebase so the test does not need a real project config or network.
// The auth listener reports "no user", so App renders the login screen.
jest.mock('firebase', () => {
  const auth = {
    currentUser: undefined,
    onAuthStateChanged: (callback) => {
      callback(null);
      return () => {};
    },
    signInWithEmailAndPassword: () => Promise.resolve(),
  };
  return {
    __esModule: true,
    default: { auth: () => auth },
  };
});
jest.mock('firebase/app', () => ({
  __esModule: true,
  default: { firestore: () => ({}) },
}));
jest.mock('firebase/firestore', () => ({}));

test('renders the sign-in screen when no user is logged in', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
