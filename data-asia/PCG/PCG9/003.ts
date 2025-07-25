import {Card} from "../../../interfaces"
import Set from "../PCG9"

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
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wrap",
            ja: "包む",
            fr: "Envelopper",
            de: "Wickeln",
            es: "Envoltura",
            it: "Avvolgere",
            pt: "Enrolar",
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
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Horn Attack",
            ja: "ホーン攻撃",
            fr: "Attaque de corne",
            de: "Hornangriff",
            es: "Ataque",
            it: "Attacco del corno",
            pt: "Ataque de chifre",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
