import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AiOutlineReload } from 'react-icons/ai';

export default function Biscoito() {
    const [frases, setfrases] = useState('')
    const [aberto, setaberto] = useState(false)

// mensegems tiradas do site https://www.pensador.com/frases_de_reflexao/

    const frases_motivacionais = [
        "''Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado. Roberto Shinyashiki ''",
        "''Imagine uma nova história para sua vida e acredite nela. Paulo Coelho ''",
        "''Não espere por uma crise para descobrir o que é importante em sua vida. Platão''",
        "''Nas dificuldades da vida, descobrimos a nossa verdadeira força interior. Pensador ''",
        "''Acredite em si e chegará um dia em que os outros não terão outra escolha senão acreditar com você. Cynthia Kersey ''",
        "''Pessimismo leva à fraqueza, otimismo ao poder. William James ''",
        "''O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo. Helen Keller  ''",
        "''Não são as nossas ideias que nos fazem otimistas ou pessimistas, mas o otimismo e o pessimismo de origem fisiológica que fazem as nossas ideias. Miguel Unamuno ''",
        "''O contrário do pessimismo raramente é o otimismo. O contrário do pessimismo, se não é a boa intenção de injetar força nos fracos, o que é bonito e faz bem, é quase sempre a idiota. Vergílio Ferreira ''",
        "''Somente quando encontramos o amor é que descobrimos o que nos faltava na vida. John Ruskin ''",
        "''Para os crentes, Deus está no princípio das coisas. Para os cientistas, no final de toda reflexão. Max Planck ''",
    
      ];

      const abrir_biscoito = () => {
        if (!aberto) {
          const randomIndex = Math.floor(Math.random() * frases_motivacionais.length);
          setfrases(frases_motivacionais[randomIndex]);
          setaberto(true);
        }
      };
    
      const restaurar_biscoito = () => {
        setfrases("");
        setaberto(false);
      };
  return (
    <View style={styles.container}>
      {aberto ? (
        <Image
          source={require("../assets/biscoitoq.png")}
        />
      ) : (
        <Image
          source={require("../assets/biscoitoi.png")}
        />
      )}
      <View>
        <Text>{frases}</Text>
      </View>
      <Button
        title='Quebrar'
        onPress={abrir_biscoito}
        disabled={aberto}
      />

      <Button
      onPress={restaurar_biscoito}
      disabled={!aberto}
      title='Resetar'
      />
      
    </View>
  )
}

const styles = StyleSheet.create({})