import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Haunter",
         ja: "Sabrina's Haunter",
         fr: "Sabrina's Haunter",
         de: "Sabrinas Haunter",
         es: "Sabrina's Haunter",
         it: "Sabrina's Haunter",
         pt: "Sabrina's Haunter",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [93],
      hp: 50,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Night Spirits",
            ja: "ナイトスピリット",
            fr: "Esprits nocturnes",
            de: "Nachtgeister",
            es: "Espíritu nocturno",
            it: "Spiriti notturni",
            pt: "Espíritos noturnos",
          },
          effect: {
            en: "Flip a number of coins equal to the total number of Sabrina's Gastlys, Sabrina's Haunters, and Sabrina's Gengars you have in play. This attack does 30 damage times the number of heads.",
            ja: "SabrinaのGastly、SabrinaのHaunter Band Sabrina's Gengarの総数に等しい数のコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Retournez un certain nombre de pièces égales au nombre total de Gastly de Sabrina, le groupe Haunter du Sabrina Sabrina's Gengar You a en jeu. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Reihe von Münzen um, die der Gesamtzahl von Sabrinas Gastly, Sabrinas Haunter -Band Sabrinas Gengar, die Sie im Spiel haben, entsprechen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltee una serie de monedas igual al número total de Gastly de Sabrina, la banda Haunter de Sabrina, Gengar de Sabrina, que tienes en la obra. Este ataque hace 30 veces el número de cabezas.",
            it: "Ribalta una serie di monete pari al numero totale di Gastly di Sabrina, la band Haunter di Sabrina Sabrina's Gengar che hai in gioco. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Vire uma série de moedas iguais ao número total de Gastly, de Sabrina, a banda Haunter Sabrina, de Sabrina, que você tem em jogo. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
