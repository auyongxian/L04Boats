import React from 'react';
import {View, Text, Image} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const Boat = ({name, icon_name, icon_color, description, picture}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                <FontAwesome6 name={icon_name} size={40} color={icon_color} />
                {name}
            </Text>
            <Text>{description}</Text>
            <Image source={picture}
                   style={{width: 400, height: 500}}
            />
        </View>
    );
};

export default Boat;