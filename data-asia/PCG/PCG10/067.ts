import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Metang",
         ja: "メタン",
         fr: "Métang",
         de: "Metang",
         es: "Metang",
         it: "Metang",
         pt: "Metang",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [375],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Clear Body",
            ja: "クリアボディ",
            fr: "Corps clair",
            de: "Klarer Körper",
            es: "Cuerpo claro",
            it: "Corpo chiaro",
            pt: "Corpo claro",
          },
          effect: {
            en: "Metang can't be affected by any Special Conditions.",
            ja: "メタンは、特別な条件の影響を受けることはできません。",
            fr: "Metang ne peut être affecté par des conditions spéciales.",
            de: "Metang kann nicht von besonderen Bedingungen betroffen sein.",
            es: "Metang no puede verse afectado por ninguna condición especial.",
            it: "Metang non può essere influenzato da alcuna condizioni speciali.",
            pt: "Metang não pode ser afetado por nenhuma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Extra Comet Punch",
            ja: "余分な彗星パンチ",
            fr: "Punch supplémentaire",
            de: "Extra Comet Punch",
            es: "Punch de cometa extra",
            it: "Punch di cometa extra",
            pt: "Punch de cometa extra",
          },
          effect: {
            en: "During your next turn, Extra Comet Punch does 30 damage plus 30 more damage.",
            ja: "次のターン中に、追加の彗星パンチは30ダメージに加えて30ダメージを与えます。",
            fr: "Au cours de votre prochain tour, COMET PUNCH fait 30 dégâts plus 30 dégâts supplémentaires.",
            de: "Während Ihres nächsten Kurses verursacht zusätzlicher Komet -Punch 30 Schaden zu und 30 weitere Schäden.",
            es: "Durante su próximo turno, Extra Comet Punch hace 30 daños más 30 más de daño.",
            it: "Durante il tuo prossimo turno, Extra Comet Punch infligge 30 danni più 30 danni.",
            pt: "Durante o seu próximo turno, o Punch Extra Comet causa 30 danos mais mais 30 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
