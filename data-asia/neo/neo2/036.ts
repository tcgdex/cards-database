import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Pupitar",
         ja: "Pupitar",
         fr: "Norme",
         de: "Pupitar",
         es: "Pupitar",
         it: "PUPITAR",
         pt: "Filhote",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [247],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Skull Bash",
            ja: "頭蓋骨バッシュ",
            fr: "Balle de crâne",
            de: "Schädelbash",
            es: "Cráneo",
            it: "Cash cranio",
            pt: "Bash do crânio",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Dust Devil",
            ja: "ダストデビル",
            fr: "Diable",
            de: "Staub Teufel",
            es: "Diablo de polvo",
            it: "Dust Devil",
            pt: "Dust de diabo",
          },
          effect: {
            en: "Does 10 damage to each non-Fighting Pokemon in play. Don't apply Weakness and Resistance.",
            ja: "プレイ中の各戦闘ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 10 dégâts à chaque pokemon non combattant en jeu. N'appliquez pas la faiblesse et la résistance.",
            de: "Schädigt 10 jedes nicht kämpfende Pokémon im Spiel. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 10 daños a cada Pokémon no luchador en juego. No aplique debilidad y resistencia.",
            it: "Fa 10 danni a ciascun Pokemon non combattente in gioco. Non applicare debolezza e resistenza.",
            pt: "10 danos a cada Pokémon não luta em jogo. Não aplique fraqueza e resistência.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
