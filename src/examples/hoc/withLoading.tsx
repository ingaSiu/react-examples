// hoc isduoda 'with'

import { CircularProgress } from '@mui/material';

type Props = {
  loading: boolean;
};

// <P extends object> reiskia, kad visi paduoti types and props nueitu kaip children

const withLoading =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P & Props> =>
  ({ loading, ...props }) => {
    return loading ? <CircularProgress /> : <Component {...(props as P)} />;
  };

export default withLoading;
