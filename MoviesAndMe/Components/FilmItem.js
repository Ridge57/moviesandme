// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native'
import {getImageFromApi} from '../API/TMDBApi.js'

class FilmItem extends React.Component {
constructor(props){
  super(props)
  {
    this.state
  }
}

_displayFavoriteImage() {
   if (this.props.isFilmFavorite) {
     // Si la props isFilmFavorite vaut true, on affiche le 🖤
     return (
       <Image
         style={styles.favorite_image}
         source={require('../Images/ic_favorite.png')}
       />
     )
   }
 }

  render() {
    const {film,displayDetailForFilm}=this.props
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={()=>displayDetailForFilm(film.id)}>
            <Image
              style={styles.image}
              source={{uri:getImageFromApi(film.poster_path)}}
            />
            <View style={{height : 190,marginTop : 5,marginRight : 5,flex:1, justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row',justifyContent : 'space-between'}}>
                    {this._displayFavoriteImage()}
                    <Text style={styles.titre}>{film.title}</Text>
                    <Text style={{fontSize : 20}}>{film.vote_average}</Text>
                  </View>

                  <View style={styles.description}>
                    <Text style={{fontStyle:'italic'}} numberOfLines={6}>{film.overview}</Text>
                  </View>

                  <View style={styles.dateSortie}>
                    <Text style={{fontSize:10}}>Sorti le {film.release_date}</Text>
                  </View>
            </View>
      </TouchableOpacity>
  )
 }
}

const styles=StyleSheet.create({
  image:{backgroundColor:'#969292',
  width : 120,
  height : 190,
  marginTop : 5,
  marginLeft : 5
},
titre:{
  width:180,
  height : 35,
  marginRight : 5,
  marginLeft : 5,
  flexWrap:'wrap',
  fontWeight : 'bold'
},

description:{
  marginRight : 5,
  marginLeft : 5,
  height:120,
  marginBottom : 5
},

dateSortie:{
  marginRight : 5,
  marginLeft : 5,
  height:25,marginBottom : 5,
  alignItems:'flex-end'
},
favorite_image: {
  width: 25,
  height: 25,
  marginRight: 5
}
})
export default FilmItem
