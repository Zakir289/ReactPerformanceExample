import React,{Component} from 'react';
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// Collection data as an array of objects

export default class ReactVirtualized extends Component{


     list = [
        'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn', 'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn',
         'Brian Vaughn','Brian Vaughn','Brian Vaughn',






        // And so on...
    ];


     rowRenderer= ({
                              key,         // Unique key within array of rows
                              index,       // Index of row within collection
                              isScrolling, // The List is currently being scrolled
                              isVisible,   // This row is visible within the List (eg it is not an overscanned row)
                              style        // Style object to be applied to row (to position it)
                          }) => {
        return (
            <div
                key={key}
                style={style}
            >
                {this.list[index]}
            </div>
        )
    }

    render(){
         return (
             <List style={{border:'1px solid red'}}
                 width={300}
                 height={300}
                 rowCount={this.list.length}
                 rowHeight={20}
                 rowRenderer={this.rowRenderer}
             />
         )
    }
}



