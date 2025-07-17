import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Weezing - 101/128",
         ja: "ウィージング-101/128",
         fr: "Weezing - 101/128",
         de: "Weezing - 101/128",
         es: "Weezing - 101/128",
         it: "Weezing - 101/128",
         pt: "Weezing - 101/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [110],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Foul Gas",
            ja: "ファウルガス",
            fr: "Gaz coque",
            de: "Foulgas",
            es: "Gas sucio",
            it: "Gas fallo",
            pt: "Gás sujo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Se o cauda, o pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Misfire",
            ja: "失火",
            fr: "Rater",
            de: "Fehlzündung",
            es: "Fallar",
            it: "Fallimento",
            pt: "Falha",
          },
          effect: {
            en: "Flip a coin. If tails, put 6 damage counters on Weezing.",
            ja: "コインをひっくり返します。尾の場合、ウィージングに6つのダメージカウンターを入れます。",
            fr: "Retourner une pièce. Si Tails, mettez 6 compteurs de dégâts sur le piétinement.",
            de: "Eine Münze drehen. Wenn Schwänze, legen Sie 6 Schadenszähler beim Weezing.",
            es: "Voltea una moneda. Si las colas, coloque 6 contadores de daño en Weezing.",
            it: "Capovolgi una moneta. Se coda, metti 6 contatori di danno su Weezing.",
            pt: "Vire uma moeda. Se a cauda, coloque 6 contadores de danos no weezing.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
