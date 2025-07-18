import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Abra",
         ja: "アブラ",
         fr: "Abra",
         de: "Abra",
         es: "Abra",
         it: "Abra",
         pt: "Abra",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [63],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Vanish",
            ja: "消えます",
            fr: "Disparaître",
            de: "Verschwinden",
            es: "Desaparecer",
            it: "Svanisce",
            pt: "Desaparecer",
          },
          effect: {
            en: "Shuffle Abra into your deck. (Discard all cards attached to Abra.)",
            ja: "アブラをデッキにシャッフルします。 （Abraに添付されたすべてのカードを廃棄します。）",
            fr: "Trissez Abra dans votre deck. (Jetez toutes les cartes attachées à Abra.)",
            de: "Mischen Sie Abra in Ihr Deck. (Verwerfen Sie alle Karten, die an Abra angeschlossen sind.)",
            es: "Arrastra a Abra en tu mazo. (Deseche todas las cartas adjuntas a Abra).",
            it: "Shuffle Abra nel tuo mazzo. (Scartare tutte le carte collegate ad Abra.)",
            pt: "Embaralhe Abra em seu baralho. (Descarte todos os cartões anexados a Abra.)",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
