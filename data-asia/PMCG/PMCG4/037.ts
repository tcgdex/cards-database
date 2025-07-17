import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Hypno",
         ja: "暗い催眠",
         fr: "Hypno sombre",
         de: "Dunkler Hypno",
         es: "Hypno oscuro",
         it: "Ipno scuro",
         pt: "Hypno escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [97],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Psypunch",
            ja: "psypunch",
            fr: "Psypunch",
            de: "Psypunch",
            es: "Psypunch",
            it: "Psypunch",
            pt: "Psypunch",
          },
          damage: 20,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Bench Manipulation",
            ja: "ベンチ操作",
            fr: "Manipulation du banc",
            de: "Bankmanipulation",
            es: "Manipulación de banco",
            it: "Manipolazione della panchina",
            pt: "Manipulação de bancada",
          },
          effect: {
            en: "Your opponent flips a number of coins equal to the number of Pokemon on his or her Bench. This attack does 20 damage times the number of tails. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "対戦相手は、ベンチのポケモンの数に等しい数のコインをひっくり返します。この攻撃は、尾の数に20回のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "Votre adversaire retourne un certain nombre de pièces égales au nombre de Pokémon sur son banc. Cette attaque fait 20 dégâts de temps le nombre de queues. N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Ihr Gegner dreht eine Reihe von Münzen um, die der Anzahl der Pokémon auf seiner Bank entsprechen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Schwänze. Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "Tu oponente voltea una serie de monedas igual al número de Pokémon en su banco. Este ataque hace 20 veces el número de colas. No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Il tuo avversario lancia una serie di monete pari al numero di Pokemon sulla sua panchina. Questo attacco fa 20 danni il numero di code. Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Seu oponente vira várias moedas iguais ao número de Pokémon em seu banco. Este ataque causa 20 danos vezes o número de caudas. Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
