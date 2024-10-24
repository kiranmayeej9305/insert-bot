// components/FeatureAccessButton.tsx
import React from 'react';
import { FeatureProvider, useFeature } from './../../context/use-feature-context';

const FeatureAccessButton: React.FC = () => {
  const { hasFeature } = useFeature();

  const isFeatureAvailable = hasFeature('1 chatbot');

  return (
    <button disabled={!isFeatureAvailable} title={!isFeatureAvailable ? 'Upgrade to unlock this feature' : ''}>
      {isFeatureAvailable ? 'Create Chatbot' : 'Locked Feature'}
    </button>
  );
};
