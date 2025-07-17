import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Chinchou",
         ja: "チンチョウ",
         fr: "Chinchou",
         de: "Chinchou",
         es: "Chinchou",
         it: "Chinchou",
         pt: "Chinchou",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [170],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Water"],
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
            en: "Does 10 damage times the number of damage counters on Chinchou.",
            ja: "ダメージ数はチンチョウのダメージ数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Chinchou.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden auf Chinchou.",
            es: "Hace 10 tiempos de daño el número de contadores de daño en Chinchou.",
            it: "Fa 10 danni volte il numero di contatori di danno su Chinchou.",
            pt: "10 danos vezes o número de contadores de danos em Chinchou.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
