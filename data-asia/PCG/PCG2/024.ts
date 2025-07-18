import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados",
         ja: "ギャラドス",
         fr: "Gyarados",
         de: "Gyarados",
         es: "Gyarados",
         it: "Gyarados",
         pt: "Gyarados",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Dragon Spark",
            ja: "ドラゴンスパーク",
            fr: "Dragon étincelle",
            de: "Drachenfunke",
            es: "Chispa de dragón",
            it: "Dragon Spark",
            pt: "Dragon Spark",
          },
          effect: {
            en: "This attack does 10 damage to each of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "この攻撃は、相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Cette attaque inflige 10 dégâts à chacun des pokemon de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Dieser Angriff schädigt 10 Pokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Este ataque hace 10 daños a cada Pokémon de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Questo attacco infligge 10 danni a ciascuno dei Pokemon del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Este ataque causa 10 danos a cada um dos Pokémon do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Full Retaliation",
            ja: "完全な報復",
            fr: "Représailles complètes",
            de: "Volle Vergeltung",
            es: "Represalia completa",
            it: "Ritorsione completa",
            pt: "Retaliação completa",
          },
          effect: {
            en: "Does 20 damage times the number of damage counters on all of your Magikarp.",
            ja: "20のダメージ数は、Magikarpのすべてのダメージ数をカウンターします。",
            fr: "Fait 20 dégâts à temps le nombre de compteurs de dégâts sur tous vos MagiKarp.",
            de: "Hat 20 Schadenszeiten die Anzahl der Schäden auf all Ihren Magikarp.",
            es: "Hace 20 veces el número de contadores de daño en todos sus magikarp.",
            it: "Fa 20 danni volte il numero di contatori di danno su tutto il tuo Magikarp.",
            pt: "20 danos vezes o número de contadores de danos em todos os seus magikarp.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Pulverize",
            ja: "粉砕します",
            fr: "Pulvériser",
            de: "Pulverisieren",
            es: "Pulverizar",
            it: "Polverizzare",
            pt: "Pulverizar",
          },
          effect: {
            en: "If the Defending Pokemon already has at least 2 damage counters on it, this attack does 50 damage plus 50 more damage.",
            ja: "ディフェンディングポケモンがすでに少なくとも2つのダメージカウンターを既に持っている場合、この攻撃は50のダメージと50のダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà au moins 2 compteurs de dégâts, cette attaque fait 50 dégâts plus 50 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon bereits mindestens 2 Schadenszähler hat, verursacht dieser Angriff 50 Schaden zuzüglich 50 mehr Schaden.",
            es: "Si el Pokémon defensor ya tiene al menos 2 contadores de daño, este ataque hace 50 daños más 50 daños más.",
            it: "Se il Pokemon in carica ha già almeno 2 contatori di danno, questo attacco fa 50 danni più 50 danni in più.",
            pt: "Se o Pokémon atual já tiver pelo menos 2 contadores de danos, esse ataque causará 50 danos mais 50 danos.",
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
