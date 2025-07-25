import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Smoochum",
         ja: "スムーチュム",
         fr: "Smoochum",
         de: "Smochum",
         es: "Smoochum",
         it: "Smoochum",
         pt: "Smoochum",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [238],
      hp: 30,
      types: ["Psychic"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Kiss",
            ja: "エネルギーキス",
            fr: "Baiser d'énergie",
            de: "Energiekuss",
            es: "Beso de energía",
            it: "Bacio di energia",
            pt: "Beijo de energia",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Energy cards attached to the Defending Pokemon. This attack does 10 damage times the number of heads.",
            ja: "防御ポケモンに接続されたエネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre de cartes d'énergie attachées au Pokémon en défense. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an das verteidigenden Pokémon angeschlossenen Energiekarten entspricht. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual al número de tarjetas de energía unidas al Pokémon defensor. Este ataque hace 10 veces el número de cabezas.",
            it: "Capovolgi un numero di monete pari al numero di carte di energia collegate al Pokemon in difesa. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Vire uma série de moedas iguais ao número de cartões de energia anexados ao Pokémon defensivo. Este ataque causa 10 danos ao número do número de cabeças.",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
