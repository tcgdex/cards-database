import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Silcoon",
         ja: "シルクーン",
         fr: "Silcoon",
         de: "Silcoon",
         es: "Silboon",
         it: "Silcoon",
         pt: "Silcoon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [266],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Advanced Armor",
            ja: "高度な鎧",
            fr: "Armure avancée",
            de: "Fortgeschrittene Rüstung",
            es: "Armadura avanzada",
            it: "Armatura avanzata",
            pt: "Armadura avançada",
          },
          effect: {
            en: "During your opponent's next turn, prevent all effects of attacks, including damage, done to Silcoon by your opponent's Evolved Pokemon.",
            ja: "相手の次のターン中に、相手の進化したポケモンによるシルクーンに与えられた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Au cours du prochain virage de votre adversaire, empêchez tous les effets des attaques, y compris les dégâts, effectués à Silcoon par le pokemon évolué par votre adversaire.",
            de: "Verhindern Sie während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, die durch das entwickelte Pokémon Ihres Gegners Silcoon angerichtet wurden.",
            es: "Durante el próximo turno de tu oponente, evita que todos los ataques de los ataques, incluido el daño, hechos a Silcoon por el Pokémon evolucionado de tu oponente.",
            it: "Durante il prossimo turno del tuo avversario, prevenire tutti gli effetti degli attacchi, inclusi i danni, fatti per silcoon dal Pokemon evoluto del tuo avversario.",
            pt: "Durante o próximo turno do seu oponente, evite todos os efeitos dos ataques, incluindo danos, causados ao silcoon pelo Pokémon evoluído do seu oponente.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
