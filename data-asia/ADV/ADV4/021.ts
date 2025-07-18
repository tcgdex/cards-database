import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Tentacruel",
         ja: "テンタクルエル",
         fr: "Tentacruel",
         de: "Tentacruel",
         es: "Tentacruel",
         it: "Tentacruel",
         pt: "Tentacruel",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [73],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Long Tentacle",
            ja: "長い触手",
            fr: "Tentacule long",
            de: "Langes Tentakel",
            es: "Tentáculo largo",
            it: "Lungo tentacolo",
            pt: "Tentáculo longo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused. If tails, discard an Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus. Si Tails, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt. Wenn Schwänze, entsorgen Sie eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido. Si las colas, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso. Se coda, scartare una carta energetica attaccata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso. Se a cauda, descarte um cartão de energia preso ao Pokémon defensor.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Toxic",
            ja: "有毒",
            fr: "Toxique",
            de: "Giftig",
            es: "Tóxico",
            it: "Tossico",
            pt: "Tóxico",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokemon between turns.",
            ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Mettez 2 compteurs de dégâts au lieu de 1 sur le Pokémon en défense entre les virages.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Setzen Sie 2 Schadenszähler anstelle von 1 auf das verteidigende Pokémon zwischen den Kurven.",
            es: "El Pokémon defensor ahora está envenenado. Coloque 2 contadores de daño en lugar de 1 en el Pokémon defensor entre giros.",
            it: "Il Pokemon in carica è ora avvelenato. Metti 2 contatori di danno invece di 1 sul Pokemon in difesa tra le curve.",
            pt: "O Pokémon atual agora está envenenado. Coloque 2 contadores de danos em vez de 1 no Pokémon atual entre as voltas.",
          },
        },
      ],


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
