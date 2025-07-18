import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Chansey",
         ja: "チャンジー",
         fr: "Chansey",
         de: "Chansey",
         es: "Chansey",
         it: "Chansey",
         pt: "Chansey",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hyper Healing",
            ja: "ハイパーヒーリング",
            fr: "Hyper guérison",
            de: "Hyperheilung",
            es: "Hiper curación",
            it: "Iper guarigione",
            pt: "Hiper cura",
          },
          effect: {
            en: "Remove 1 damage counter and all Special Conditions from each of your Active Pokemon.",
            ja: "アクティブなポケモンのそれぞれから1つのダメージカウンターとすべての特別な条件を削除します。",
            fr: "Retirez 1 compteur de dégâts et toutes les conditions spéciales de chacun de vos Pokémon actifs.",
            de: "Entfernen Sie 1 Schadenschalter und alle besonderen Bedingungen von jedem Ihrer aktiven Pokémon.",
            es: "Retire 1 contador de daño y todas las condiciones especiales de cada uno de sus Pokémon activos.",
            it: "Rimuovi 1 contatore di danni e tutte le condizioni speciali da ciascuno dei Pokemon attivi.",
            pt: "Remova 1 contador de danos e todas as condições especiais de cada um dos seus Pokémon ativos.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Double Tackle",
            ja: "ダブルタックル",
            fr: "Tacle double",
            de: "Doppelangestellter",
            es: "Tackle doble",
            it: "Doppio attrezzatura",
            pt: "Tackle duplo",
          },
          effect: {
            en: "Does 20 damage to each Defending Pokemon.",
            ja: "防御する各ポケモンに20のダメージを与えます。",
            fr: "Fait 20 dommages à chaque Pokémon en défense.",
            de: "Schädigt 20 an jedem verteidigenden Pokémon 20.",
            es: "Hace 20 daños a cada Pokémon defensor.",
            it: "Fa 20 danni a ciascun Pokemon in difesa.",
            pt: "Causa 20 danos a cada Pokémon defensor.",
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
