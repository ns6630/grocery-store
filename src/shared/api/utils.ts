export const fakeNetwork = () => {
  return new Promise<void>((resolve) =>
    setTimeout(resolve, Math.random() * 2000),
  );
};
