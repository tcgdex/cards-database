import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Dugtrio",
         ja: "Dugtrio",
         fr: "Dugtrio",
         de: "Dugtrio",
         es: "Dugtrio",
         it: "Dugtrio",
         pt: "Dugtrio",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [51],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
          name: {
            en: "Earthquake",
            ja: "地震",
            fr: "Tremblement de terre",
            de: "Erdbeben",
            es: "Terremoto",
            it: "Terremoto",
            pt: "Terremoto",
          },
          effect: {
            en: "Does 10 damage to each of your own Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dommages à chacun de vos propres pokémon bancés. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Ihrer eigenen Bankpokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada uno de sus propios Pokémon de banca. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni a ciascuno dei tuoi Pokemon in panchina. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "10 danos a cada um de seus próprios Pokémon em banco. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 70,
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
