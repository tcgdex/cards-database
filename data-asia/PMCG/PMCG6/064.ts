import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Blaine's Doduo",
         ja: "ブレインのドドゥオ",
         fr: "Doduo de Blaine",
         de: "Blaines Doduo",
         es: "Doduo de Blaine",
         it: "Blaine's Doduo",
         pt: "Doduo de Blaine",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [84],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wild Kick",
            ja: "ワイルドキック",
            fr: "Coup de pied sauvage",
            de: "Wilder Kick",
            es: "Patada salvaje",
            it: "Calcio selvaggio",
            pt: "Kick selvagem",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Blaine's Doduo.",
            ja: "10ダメージを繰り返し、ブレインのドドゥオのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur le Doduo de Blaine.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden auf Blaines Doduo.",
            es: "Hace 10 veces el número de contadores de daño en el Doduo de Blaine.",
            it: "Fa 10 danni volte il numero di contatori di danno sul doduo di Blaine.",
            pt: "10 danos vezes o número de contadores de danos no doduo de Blaine.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
