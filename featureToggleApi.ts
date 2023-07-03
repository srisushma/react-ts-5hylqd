


export const featureToggle = true;

export const fetchToggleApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: featureToggle });
    }, 1000);
  });
};