import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Spinda",
         ja: "スピンダ",
         fr: "Spinda",
         de: "Spinda",
         es: "Spinda",
         it: "Spinda",
         pt: "Spinda",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [327],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "The Hula-la",
            ja: "フララ",
            fr: "Le hula-la",
            de: "Die Hula-La",
            es: "El hula-la",
            it: "L'hula-la",
            pt: "O hula-la",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, both the Defending Pokemon and Spinda are now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御するポケモンとスピンダの両方が混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si les queues, les Pokémon en défense et Spinda sont désormais confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, sind sowohl das verteidigende Pokemon als auch die Spinda jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si Tails, tanto el Pokémon y Spinda defensores están ahora confundidos.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se le code, sia il Pokemon in carica che la spinda sono ora confusi.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se as caudas, tanto os Pokemon e Spinda defensores estão confusos.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Spinda.",
            ja: "ダメージ数のダメージ数は、スピンダのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Spinda.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadenszähler auf Spinda.",
            es: "Hace 10 tiempos de daño el número de contadores de daño en Spinda.",
            it: "Fa 10 danni volte il numero di contatori di danno su Spinda.",
            pt: "10 danos vezes o número de contadores de danos em Spinda.",
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
