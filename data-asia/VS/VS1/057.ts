import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Lapras",
         ja: "ミスティのラプラ",
         fr: "Lapras de Misty",
         de: "Mistys Lapras",
         es: "Lapras de Misty",
         it: "Lapras di Misty",
         pt: "Lapras de Misty",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [131],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sweet Song",
            ja: "甘い歌",
            fr: "Sweet Song",
            de: "Süßes Lied",
            es: "Dulce canción",
            it: "Dolce canzone",
            pt: "Música doce",
          },
          effect: {
            en: "Flip a coin. If heads, remove 1 damage counter from each of your Pokemon that has any.",
            ja: "コインをひっくり返します。頭の場合は、ポケモンのそれぞれから1つのダメージカウンターを削除します。",
            fr: "Retourner une pièce. Si les têtes, retirez 1 compteur de dégâts de chacun de vos Pokémon qui en a.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entfernen Sie 1 Schadenschalter von jedem Ihrer Pokémon, der eine hat.",
            es: "Voltea una moneda. Si se dirige, retire 1 contador de daño de cada uno de sus Pokémon que tiene alguno.",
            it: "Capovolgi una moneta. Se la testa, rimuovi 1 contatore di danni da ciascuno dei Pokemon che ne ha.",
            pt: "Vire uma moeda. Se as cabeças, remova 1 contador de danos de cada um dos seus Pokémon que possui.",
          },
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Giant Wave",
            ja: "巨大な波",
            fr: "Vague géante",
            de: "Riesenwelle",
            es: "Ola gigante",
            it: "Onda gigante",
            pt: "Onda gigante",
          },
          effect: {
            en: "Misty's Lapras can’t attack during your next turn.",
            ja: "MistyのLaprasは次のターン中に攻撃することはできません。",
            fr: "Les Lapras de Misty ne peuvent pas attaquer pendant votre prochain tour.",
            de: "Mistys Lapras kann in Ihrer nächsten Runde nicht angreifen.",
            es: "Lapras de Misty no puede atacar durante su próximo turno.",
            it: "I Lapras di Misty non possono attaccare durante il tuo prossimo turno.",
            pt: "Lapras de Misty não pode atacar durante o seu próximo turno.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
