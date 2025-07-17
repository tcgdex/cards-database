import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Qwilfish",
         ja: "qwilfish",
         fr: "Qwilfish",
         de: "Qwilfish",
         es: "Pez qwil",
         it: "Qwilfish",
         pt: "Qwilfish",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [211],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Stun Needle",
            ja: "スタンニードル",
            fr: "Aiguille étourdissante",
            de: "Betäubungsnadel",
            es: "Aguja",
            it: "Ago stordente",
            pt: "Agulha de atordoamento",
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
      ],

      retreat: 1,

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
