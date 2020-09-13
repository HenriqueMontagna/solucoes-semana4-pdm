import React from 'react'
import {
    View,
    Text,
    StyleSheet, Image
} from 'react-native';
import Cartao from './Cartao';

const PrevisaoItem = (props) => {

    if (props.previsao != "") {
        
        return (
            <Cartao estilos={styles.cartao}>
                <View style={styles.tela}>
                    <Image
                        style={styles.imagem}
                        source={
                            {
                                uri: "https://openweathermap.org/img/wn/" + props.previsao.list[0].weather[0].icon + ".png"
                            }
                        }
                    />
                    <View>
                        <View style={styles.primeiraLinha}>
                            <Text>Nascer do Sol: {new Date(props.previsao.city.sunrise * 1000).toLocaleTimeString()}</Text>
                            <Text>Pôr do Sol: {new Date(props.previsao.city.sunset * 1000).toLocaleTimeString()} </Text>
                        </View>
                        <View style = {styles.segundaLinha}>
                            <Text>Sensação Termica: {props.previsao.list[0].main.feels_like + "\u00B0C"}</Text>
                        </View>
                    </View>
    
                </View>
            </Cartao>
        )

    }

    else return (
        <View style = {styles.none}>
            <Text >Nenhuma Cidade Inserida</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    cartao: {
        marginBottom: 8
    },

    tela: {
        flexDirection: 'row'
    },

    imagem: {
        width: 50,

    },

    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'column'
    },

    segundaLinha: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: "#DDD"
    },

    none: {
        alignItems: "center"
    }

})

export default PrevisaoItem;