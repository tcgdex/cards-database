import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Ninetales",
         ja: "モーティのニネタール",
         fr: "Ninetales de Morty",
         de: "Mortys Ninetales",
         es: "Ninetales de Morty",
         it: "Morty's Ninetales",
         pt: "Ninetales de Morty",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [38],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Call Will-O-Wisp",
            ja: "will-o-wispに電話してください",
            fr: "Appelez Will-O-Wisp",
            de: "Rufen Sie Will-O-Wisp an",
            es: "Llame a Will-o-Wisp",
            it: "Chiama Will-O-Wisp",
            pt: "Ligue para Will-O-Wisp",
          },
          effect: {
            en: "Flip 3 coins. For each heads, choose 1 Fire Energy card from your discard pile and put it in your hand.",
            ja: "3コインをフリップします。各ヘッドについて、廃棄の山から1枚のファイアエネルギーカードを選択し、手に入れます。",
            fr: "Flip 3 pièces. Pour chaque tête, choisissez 1 carte d'énergie de feu dans votre tas de défausse et mettez-la dans votre main.",
            de: "3 Münzen umdrehen. Wählen Sie für jeden Köpfe 1 Feuersenergiekarte von Ihrem Ablagerungsstapel aus und legen Sie sie in Ihre Hand.",
            es: "Flip 3 monedas. Para cada cabezal, elija 1 tarjeta de energía de fuego de su pila de descarte y póngala en su mano.",
            it: "Flip 3 monete. Per ogni testa, scegli 1 carta di energia del fuoco dalla pila di scarto e mettila in mano.",
            pt: "Flip 3 moedas. Para cada cabeça, escolha 1 cartão de energia de incêndio na sua pilha de descarte e coloque -a na sua mão.",
          },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flickering Flames",
            ja: "フリッカリングフレーム",
            fr: "Flammes scintillants",
            de: "Flackern Flammen",
            es: "Llamas parpadeantes",
            it: "Fiamme tremolanti",
            pt: "Chamas tremeluzentes",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
