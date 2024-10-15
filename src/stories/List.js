import React from 'react';
import { List } from '@mantine/core';

// ListComponent bileşeni: props olarak items alır ve Mantine List ile render eder
export const ListComponent = ({ items = [] }) => {
  // Güvenli bir şekilde items'ın bir dizi olduğundan emin ol
  const safeItems = Array.isArray(items) ? items : [];

  return (
    <List spacing="sm" size="md" center icon={<i className="fas fa-check-circle"></i>}>
      {safeItems.map((item, index) => (
        <List.Item key={index}>{item}</List.Item>
      ))}
    </List>
  );
};
