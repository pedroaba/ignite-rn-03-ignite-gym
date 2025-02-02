import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState('')
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp() {
    console.log(name)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <VStack flex={1} px={10} pb={16}>
        <Image 
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo.
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input 
            placeholder="Nome"
            onChangeText={setName}
          />

          <Input 
            placeholder="E-mail" 
            keyboardType="email-address"
            autoCapitalize="none"

          />
          <Input 
            placeholder="Senha" 
            secureTextEntry
          />

          <Button onPress={handleSignUp} title="Criar e acessar" />
        </Center>
        
        <Button 
          title="Voltar para o login" 
          variant="outline" 
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}