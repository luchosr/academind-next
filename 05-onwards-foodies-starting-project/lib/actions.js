'use server';

import { saveMeal } from './meals';

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    name: formData.get('name'),
    email: formData.get('email'),
  };

  await saveMeal(meal);
};
