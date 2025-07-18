import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Slowbro",
         ja: "スローブロ",
         fr: "Slowbro",
         de: "Slowbro",
         es: "Slowbro",
         it: "Slowbro",
         pt: "Slowbro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [80],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dual Armor",
            ja: "デュアルアーマー",
            fr: "Armure double",
            de: "Doppelpanzer",
            es: "Armadura dual",
            it: "Doppia armatura",
            pt: "Armadura dupla",
          },
          effect: {
            en: "As long as Slowbro has any Psychic Energy attached to it, Slowbro is both Water and Psychic type.",
            ja: "Slowbroに精神エネルギーが付着している限り、Slowbroは水と精神型の両方です。",
            fr: "Tant que Slowbro a une énergie psychique qui lui est attachée, Slowbro est à la fois de l'eau et du type psychique.",
            de: "Solange Slowbro eine psychische Energie hat, ist Slowbro sowohl Wasser als auch psychische Art.",
            es: "Mientras Slowbro tenga alguna energía psíquica unida a ella, Slowbro es tanto agua como de tipo psíquico.",
            it: "Finché Slowbro ha qualsiasi energia psichica attaccata ad essa, Slowbro è sia l'acqua che il tipo psichico.",
            pt: "Enquanto Slowbro tiver qualquer energia psíquica ligada a ela, Slowbro é água e tipo psíquico.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Parallel Gain",
            ja: "並列ゲイン",
            fr: "Gain parallèle",
            de: "Parallelgewinn",
            es: "Ganancia paralela",
            it: "Guadagno parallelo",
            pt: "Ganho paralelo",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Pokemon (including Slowbro).",
            ja: "各ポケモン（スローブロを含む）から1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon (y compris Slowbro).",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer Pokémon (einschließlich Slowbro).",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon (incluido Slowbro).",
            it: "Rimuovi 1 contatore di danni da ciascuno dei Pokemon (incluso Slowbro).",
            pt: "Remova 1 contador de danos de cada um dos seus Pokemon (incluindo SlowBro).",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Rolling Tackle",
            ja: "ローリングタックル",
            fr: "Tacle roulant",
            de: "Rolling Tackle",
            es: "Tacleada",
            it: "Attrezzatura rotolante",
            pt: "Tackle rolante",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
