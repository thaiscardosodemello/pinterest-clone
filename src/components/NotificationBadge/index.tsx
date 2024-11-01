import React from 'react';
import { StyledBadge } from './styles';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return <StyledBadge>{count}</StyledBadge>;
};

export default NotificationBadge;