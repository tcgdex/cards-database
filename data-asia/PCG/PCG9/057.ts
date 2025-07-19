import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Xatu (Delta Species)",
         ja: "Xatu（デルタ種）",
         fr: "Xatu (espèces delta)",
         de: "Xatu (Delta -Arten)",
         es: "Xatu (especie delta)",
         it: "Xatu (Delta Species)",
         pt: "Xatu (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Extra Feather",
            ja: "余分な羽",
            fr: "Plume supplémentaire",
            de: "Zusätzliche Feder",
            es: "Pluma extra",
            it: "Piuma extra",
            pt: "Pena extra",
          },
          effect: {
            en: "Each of your Stage 2 PokÃ©mon-ex does 10 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "ステージ2Pokã©Mon-Exのそれぞれは、防御するPokã©Monに10個のダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Chacun de votre étape 2 Pokã © Mon-EX fait 10 dommages supplémentaires aux Poké en défense (avant d'appliquer une faiblesse et une résistance).",
            de: "Jede Ihrer Stufe 2 Poké © Mon-EX verursacht 10 weitere Schäden an der verteidigenden Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Cada una de sus etapas 2 Poké Mon-Ex hace 10 daños más al Poké Mon defensor (antes de aplicar debilidad y resistencia).",
            it: "Ognuno del tuo stadio 2 Poké mon-ex fa altri 10 danni al poké mon (prima di applicare la debolezza e la resistenza).",
            pt: "Cada um dos seus estágios 2 Poké Mon-ex causa mais 10 danos ao Poké Mon defensor (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
