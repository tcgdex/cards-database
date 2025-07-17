import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Exeggutor",
         ja: "暗いexeggutor",
         fr: "Exaguteur sombre",
         de: "Dunkler Exeggutor",
         es: "Exegutor oscuro",
         it: "Exeggutor oscuro",
         pt: "Exeggutor escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [103],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Triple Headbutt",
            ja: "トリプルヘッドバット",
            fr: "Triple bobutt",
            de: "Dreifach Headbutt",
            es: "Triple cabezal",
            it: "Triplo headbutt",
            pt: "Triple Headbutt",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
            ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "MAX Burst",
            ja: "マックスバースト",
            fr: "Éclatement maximal",
            de: "Max burst",
            es: "Estallido máximo",
            it: "Scoppio massimo",
            pt: "Max Burst",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokemon. This attack does 20 damage times the number of heads.",
            ja: "相手のポケモンに取り付けられたエネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de cartes d'énergie attachées au pokemon de votre adversaire. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Anzahl der an das Pokémon Ihres Gegners verbundenen Energiekarten entsprechen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual al número de tarjetas de energía unidas al Pokémon de tu oponente. Este ataque hace 20 veces el número de cabezas.",
            it: "Capovolgi un numero di monete pari al numero di carte di energia collegate al Pokemon del tuo avversario. Questo attacco fa 20 danni il numero di teste.",
            pt: "Vire uma série de moedas iguais ao número de cartões de energia anexados ao Pokémon do seu oponente. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
