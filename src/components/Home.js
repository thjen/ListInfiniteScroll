import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import Item from './item';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 1,
    }
  }
  fetch = () => {
    this.props.onFetchCourses(this.state.page);
  }
  componentDidMount() {
    this.props.onFetchCourses(1);
  }
  _loadMoreContentAsync = async (last_page) => {
    if (this.state.page !== last_page) {
      
      this.setState({page: this.state.page + 1});
      //this.fetch();
      this.props.onFetchCourses(this.state.page + 1);
    }
  }
  render() {
    return (
      <View>   
        <View style={{alignSelf: 'center', 
            position: 'absolute', 
            top: 500*0.4}}>        
            <ActivityIndicator animating={this.props.courses.loading} size={'large'} color={'coral'}/>        
        </View> 
        {console.log('current: ' + this.state.page)}
        {console.log('last: ' + this.props.courses.last_page)}
        <FlatList
          ListFooterComponent={() => <Text>{this.state.page === this.props.courses.last_page ? '' : 'Loading'}</Text>}
          data={this.props.courses.data}
          //renderScrollComponent={props => <InfiniteScrollView {...props}/>}
          renderItem={({item, index}) => {
            return (
              <Item
                item={item}
                index={index}
                parentFlatList={this}
              />
            );
          }}
          //canLoadMore
          //onLoadMoreAsync={this._loadMoreContentAsync}
          keyExtractor={(item,index) => item.classroom_id.toString()}
          onEndReached={() => this._loadMoreContentAsync(this.props.courses.last_page)}
          onEndReachedThreshold={0}
        />
      </View>
    )
  }
}