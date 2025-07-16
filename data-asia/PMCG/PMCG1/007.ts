import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Tangela",
         ja: "タンゲラ",
         fr: "Tangela",
         de: "TANGELA",
         es: "Tangela",
         it: "TANGELA",
         pt: "Tangela",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [114],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Bind",
            ja: "バインド",
            fr: "Lier",
            de: "Binden",
            es: "Unir",
            it: "Legamento",
            pt: "Vincular",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Poisonpowder",
            ja: "毒パウダー",
            fr: "Poudre empoisonnée",
            de: "Giftpulver",
            es: "Pozal de veneno",
            it: "Velenco",
            pt: "Poisonpowder",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
