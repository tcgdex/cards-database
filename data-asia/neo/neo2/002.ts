import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Weedle",
         ja: "雑草",
         fr: "Faire de l'herbe",
         de: "Unkraut",
         es: "Maleza",
         it: "Diserbare",
         pt: "Weedle",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [13],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Spike Stab",
            ja: "スパイクの刺し傷",
            fr: "Coup de poing",
            de: "Spike Stich",
            es: "Puñalada",
            it: "Pugnalata a punta",
            pt: "Spike esfaquear",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned. If tails, this attack does nothing (not even damage).",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné. Si Tails, cette attaque ne fait rien (pas même de dégâts).",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet. Wenn Schwänze, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado. Si Tails, este ataque no hace nada (ni siquiera daño).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato. Se le code, questo attacco non fa nulla (nemmeno danni).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado. Se caudas, esse ataque não faz nada (nem sequer dano).",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
