import { RootStackParamList } from './stack.routes'; // Import the type of the route we defined earlier

declare global { // Declare that we want to use the RootStackParamList as the type for our route params
  namespace ReactNavigation { // We call this namespace "ReactNavigation"
    interface RootParamList extends RootStackParamList { } // And this is the type definition for our route params
  }
}