import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Noctowl",
         ja: "MortyのNoctowl",
         fr: "Noctowl de Morty",
         de: "Mortys Noctowl",
         es: "Noctowl de Morty",
         it: "Morty's Noctowl",
         pt: "Noctowl de Morty",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [164],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "See Through",
            ja: "スルーを見てください",
            fr: "Voir à travers",
            de: "Durchschauen",
            es: "Ver a través de",
            it: "Vedere attraverso",
            pt: "Veja através",
          },
          effect: {
            en: "Look at your opponent's hand.",
            ja: "相手の手を見てください。",
            fr: "Regardez la main de votre adversaire.",
            de: "Schauen Sie sich die Hand Ihres Gegners an.",
            es: "Mira la mano de tu oponente.",
            it: "Guarda la mano del tuo avversario.",
            pt: "Olhe para a mão do seu oponente.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Peck",
            ja: "ダブルペック",
            fr: "Double",
            de: "Doppelpeck",
            es: "Bisea",
            it: "Double beck",
            pt: "Peck duplo",
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
