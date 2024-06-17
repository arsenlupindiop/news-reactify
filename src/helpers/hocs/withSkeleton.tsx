import Sceleton from "../../components/Sceleton/Sceleton";
import { DirectionType, SkeletonType } from "../../interfaces";

interface Props {
  loading: boolean,
}
function withSkeleton<P extends object>(Component: React.ComponentType<P> , type?: SkeletonType, count?: number, direction?: DirectionType ) {
    return function WithSkeleton(props: Props & P) {
      const {loading, ...restProps} = props;

      if (loading) {
         return <Sceleton type={type} count={count} direction={direction}/>
      } 
        return <Component {...(restProps as P)} />
    }
}

export default withSkeleton