export const hasNumber = (str: any) => {
  return /\d/.test(str);
};
export const validateCapital = (str: any) => {
  return str == str.toLowerCase();
};
export const getBytes = (x: any) => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0,
    n = parseInt(x, 10) || 0;
  while (n >= 1024 && ++l) {
    n = n / 1024;
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
};
export const checkForSpecialChars = (str: any) => {
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (format.test(str)) {
    return true;
  } else {
    return false;
  }
};

export const numberCheck = (args: any) => {
  if (args.key === 'e' || args.key === '+' || args.key === '-') {
    return false;
  } else {
    return true;
  }
};
export const formatDate = (dt: any) => {
  return dt.split('T')[0];
};
export const compareEmploymentObjects = (obj1: any, obj2: any) => {
  if (obj1 == obj2?.code && obj1 == obj2?.code) return true;
  else return false;
};
export const compareStateObjects = (obj1: any, obj2: any) => {
  if (obj1 == obj2 && obj1 == obj2) return true;
  else return false;
};
export const comparePropertyObjects = (obj1: any, obj2: any) => {
  if (obj1 == obj2?.code && obj1 == obj2?.code) return true;
  else return false;
};
export const compareCustomerObj = (obj1: any, obj2: any) => {
  if (obj1 == obj2?.id && obj1 == obj2?.id) return true;
  else return false;
};
export const comparePickupLocationObj = (obj1: any, obj2: any) => {
  if (obj1 == obj2?.location_id && obj1 == obj2?.location_id) return true;
  else return false;
};
export const compareDeliveryLocationObj = (obj1: any, obj2: any) => {
  if (obj1 == obj2?.location_id && obj1 == obj2?.location_id) return true;
  else return false;
};
export const compareCountryObj = (obj1: any, obj2: any) => {
  if (obj1?.name == obj2?.name && obj1?.iso2 == obj2?.iso2) return true;
  else return false;
};
export const compareStatesObj = (obj1: any, obj2: any) => {
  if (obj1?.name == obj2?.name && obj1?.state_code == obj2?.state_code)
    return true;
  else return false;
};
export const compareObjects_ = () => {
  return false;
};

export const concatColumnString = (colString: string) => {
  let strtext = colString;
  const myArray = strtext.split(' ');
  return myArray.join('');
};
export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }
};
export const commaFormatted = (event: any) => {
  if (event.which >= 37 && event.which <= 40) return;

  if (event.target.value) {
    event.target.value = event.target.value
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
