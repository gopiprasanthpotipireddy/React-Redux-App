export const renderIfElse = (condition, ifCallback, elseCallback) =>
  condition() ? ifCallback() : elseCallback();

export const renderIf = (condition, componentCallback) =>
  renderIfElse(condition, componentCallback, () => null);

export const exists = field => field !== undefined && field !== null;

export const isValidValue = field => exists(field) && field !== '0' && field !== '' && field !== 0;

export const caseInsensitiveEquals = (lhs, rhs) => lhs.toLowerCase() === rhs.toLowerCase();

export const paginationMapper = (activePage) => {
  switch(activePage) {
      case 1: return 'Animals';
      case 2: return 'Foods';
      case 3: return 'Furniture';
      case 4: return 'Nature';
      case 5: return 'Technology';
      case 6: return 'Transport';
      default: return 'Animals';
  }
};
