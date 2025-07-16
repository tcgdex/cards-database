import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Snorlax",
         ja: "Snorlax",
         fr: "Snorlax",
         de: "Snorlax",
         es: "Snorlax",
         it: "Snorlax",
         pt: "Snorlax",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [143],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Thick Skinned",
            ja: "厚い皮",
            fr: "À peau épaisse",
            de: "Dickhäutig",
            es: "De piel gruesa",
            it: "Sballata densa",
            pt: "Pele grossa",
          },
          effect: {
            en: "Snorlax can't become Asleep, Confused, Paralyzed, Poisoned, or Burned. This power stops working while Snorlax is affected by a Special Condition.",
            ja: "Snorlaxは眠り、混乱し、麻痺し、毒され、燃やされることはできません。このパワーは機能しなくなり、Snorlaxは特別な状態の影響を受けます。",
            fr: "Snorlax ne peut pas endormir, confus, paralysé, empoisonné ou brûlé. Cette puissance cesse de fonctionner tandis que Snorlax est affecté par une condition spéciale.",
            de: "Snorlax kann nicht schlafen, verwirrt, gelähmt, vergiftet oder verbrannt. Diese Leistung hört auf zu funktionieren, während Snorlax von einem besonderen Zustand beeinflusst wird.",
            es: "Snorlax no puede quedarse dormido, confundido, paralizado, envenenado o quemado. Esta potencia deja de funcionar, mientras que Snorlax se ve afectado por una condición especial.",
            it: "Snorlax non può addormentarsi, confuso, paralizzato, avvelenato o bruciato. Questo potere smette di funzionare mentre Snorlax è influenzato da una condizione speciale.",
            pt: "O Snorlax não pode ficar dormindo, confuso, paralisado, envenenado ou queimado. Esse poder para de funcionar enquanto o Snorlax é afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
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
          damage: 30,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
      ],
};
