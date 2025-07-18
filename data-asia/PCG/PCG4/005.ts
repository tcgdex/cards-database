import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Spinarak",
         ja: "スパラク",
         fr: "Spinarak",
         de: "Spinarak",
         es: "Espinarak",
         it: "Spinarak",
         pt: "Spinarak",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [167],
      hp: 50,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Stun Poison",
            ja: "スタンポイズン",
            fr: "Étourdir",
            de: "Betäubungsgift",
            es: "Veneno aturdido",
            it: "Veleno stordente",
            pt: "Poisão de atordoamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed and Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今や麻痺し、毒されます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé et empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokémon jetzt gelähmt und vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado y envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato e avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está paralisado e envenenado.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Pierce",
            ja: "ピアス",
            fr: "Percer",
            de: "Pierce",
            es: "Atravesar",
            it: "Forare",
            pt: "Pierce",
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
