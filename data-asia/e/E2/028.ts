import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Wooper - 028/092",
         ja: "Wooper -028/092",
         fr: "Wooper - 028/092",
         de: "Wooper - 028/092",
         es: "Wooper - 028/092",
         it: "WOOPER - 028/092",
         pt: "Wooper - 028/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [194],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Whap",
            ja: "尾のwhap",
            fr: "Bap",
            de: "Schwanzpeak",
            es: "Cola whap",
            it: "Coda whap",
            pt: "Tail Whap",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
          name: {
            en: "Deep Dive",
            ja: "ディープダイビング",
            fr: "Plongée profonde",
            de: "Tiefer Tauchgang",
            es: "Buceo",
            it: "Immersione profonda",
            pt: "Mergulho profundo",
          },
          effect: {
            en: "Flip 3 coins. For each heads, remove 1 damage counter from Wooper.",
            ja: "3コインをフリップします。各ヘッドについて、Wooperから1つのダメージカウンターを取り外します。",
            fr: "Flip 3 pièces. Pour chaque tête, retirez 1 compteur de dégâts de Wooper.",
            de: "3 Münzen umdrehen. Entfernen Sie für jeden Köpfe 1 Schadenschalter von Wooper.",
            es: "Flip 3 monedas. Para cada cabezal, retire 1 contador de daños de Wooper.",
            it: "Flip 3 monete. Per ogni teste, rimuovere 1 contatore di danni da Wooper.",
            pt: "Flip 3 moedas. Para cada cabeça, remova 1 contador de danos do Wooper.",
          },
        },
      ],

      retreat: 1,

};
