import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Caterpie",
         ja: "キャタピー",
         fr: "Chenille",
         de: "Caterpie",
         es: "Orugada",
         it: "Caterpia",
         pt: "Caterpie",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [10],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "String Shot",
            ja: "ストリングショット",
            fr: "Tir à cordes",
            de: "Saitenschuss",
            es: "Disparo",
            it: "Scatto",
            pt: "Tiro de corda",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent's Active Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le pokemon actif de votre adversaire est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das aktive Pokémon Ihres Gegners jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon activo de tu oponente ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon attivo del tuo avversario è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon ativo do seu oponente agora está paralisado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

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
