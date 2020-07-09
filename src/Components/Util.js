import process from 'process';

const ResoureRoot = process.env.NODE_ENV !== 'production' ? '/georgeyang.me'  : '';

export default ResoureRoot;