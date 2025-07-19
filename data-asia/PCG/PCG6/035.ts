import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonair (Delta Species)",
         ja: "ドラゴンエア（デルタ種）",
         fr: "Dragonair (espèces delta)",
         de: "Dragonair (Delta -Arten)",
         es: "Dragonair (especie delta)",
         it: "Dragonair (Delta Species)",
         pt: "Dragonair (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [148],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Twister",
            ja: "ツイスター",
            fr: "Tornade",
            de: "Twister",
            es: "Tornado",
            it: "Twister",
            pt: "Twister",
          },
          effect: {
            en: "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokemon.",
            ja: "2つのコインをフリップします。両方が尾の場合、この攻撃は何もしません。それぞれの頭について、防御ポケモンに取り付けられたエネルギーを捨てます。",
            fr: "Flip 2 pièces. Si les deux sont des queues, cette attaque ne fait rien. Pour chaque tête, jetez une énergie attachée au Pokémon en défense.",
            de: "2 Münzen umdrehen. Wenn beide Schwänze sind, tut dieser Angriff nichts. Verwerfen Sie für jeden Köpfe eine Energie, die dem verteidigenden Pokémon angeschlossen ist.",
            es: "Flip 2 monedas. Si ambas son colas, este ataque no hace nada. Para cada cabezal, deseche una energía unida al Pokémon defensor.",
            it: "Flip 2 monete. Se entrambi sono code, questo attacco non fa nulla. Per ogni testa, scartare un'energia attaccata al Pokemon in difesa.",
            pt: "Flip 2 moedas. Se ambos são caudas, esse ataque não faz nada. Para cada cabeça, descarte uma energia ligada ao Pokémon defensor.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
