import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix",
         ja: "Vulpix",
         fr: "Vulpix",
         de: "Vulpix",
         es: "Vulpix",
         it: "Vulpix",
         pt: "Vulpix",
      },


      category: "Pokemon",
      dexId: [37],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Ember",
            ja: "ember",
            fr: "Bilan",
            de: "Glut",
            es: "Ascua",
            it: "Ember",
            pt: "Brasa",
          },
          effect: {
            en: "Discard a Fire Energy attached to Vulpix.",
            ja: "Vulpixに取り付けられた火エネルギーを廃棄します。",
            fr: "Jeter une énergie de feu attachée à Vulpix.",
            de: "Verwerfen Sie eine an Vulpix gebundene Feuerenergie.",
            es: "Deseche una energía de fuego unida a Vulpix.",
            it: "Scartare un'energia antincendio attaccata a Vulpix.",
            pt: "Descarte uma energia de incêndio ligada ao Vulpix.",
          },
          damage: 30,
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
