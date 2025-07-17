import {Card} from "../../../interfaces"
import Set from "../web1"

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
          cost: ["Grass"],
          name: {
            en: "Stun Spore",
            ja: "スタン胞子",
            fr: "Spored",
            de: "Stun Spore",
            es: "Espora",
            it: "Spora stordente",
            pt: "Esporo de atordoamento",
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
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Poison Whip",
            ja: "ポイズンホイップ",
            fr: "Fouet empoisonné",
            de: "Giftpeitsche",
            es: "Látigo venenoso",
            it: "Frusta velenosa",
            pt: "Poison Whip",
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
          damage: 10,
        },
      ],

      retreat: 2,

};
