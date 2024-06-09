import Sceleton from "../../components/Sceleton/Sceleton";

export const withSkeleton = (Component, type, count) => {
    return function WithSkeleton(props) {
      const {loading, ...restProps} = props;

      if (loading) {
         return <Sceleton type={type} count={count} />
      } 
        return <Component {...restProps} />
    }
}