"use client" 
import React from 'react';
import { useLocale } from 'next-intl';
import {useRouter} from 'next-intl/client';

const Localization = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value;
    if (value === 'ru') {
      router.push('/', {locale: 'ru'});
    } else {
      router.push('/', {locale: 'en'});
    }
  }

  return (
    <select id="countries" 
      onChange={(evt) => handleChange(evt)}
      defaultValue={locale === 'ru' ? 'ru' : 'en'}
      className="mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option className='p-5' value="en">En</option>
      <option className='p-2' value="ru">Ru</option>
    </select>
  );
};

export default Localization;