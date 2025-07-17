import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwag",
         ja: "poliwag",
         fr: "Poliwag",
         de: "Poliwag",
         es: "Poliwag",
         it: "Poliwag",
         pt: "Poliwag",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [60],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Sleep Bubble",
            ja: "睡眠バブル",
            fr: "Bulle de sommeil",
            de: "Schlafblase",
            es: "Burbuja para dormir",
            it: "Bolla del sonno",
            pt: "Bolha do sono",
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
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
