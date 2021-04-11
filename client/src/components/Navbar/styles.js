import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
    backgroundColor: "#000000",
  },
  image: {
    marginLeft: '10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  logout:{
    backgroundColor: "#FF0000",
  }
}));
