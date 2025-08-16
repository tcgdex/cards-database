import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Togepi",
         ja: "togepi",
         fr: "Togepi",
         de: "Togepi",
         es: "Tegepi",
         it: "Togepi",
         pt: "TOGEPI",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [175],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Charm",
            ja: "魅力",
            fr: "Charme",
            de: "Charme",
            es: "Encanto",
            it: "Fascino",
            pt: "Charme",
          },
          effect: {
            en: "If the Defending Pokemon attacks during your opponent's next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance).",
            ja: "防御するポケモンが相手の次のターン中に攻撃した場合、それが与える損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
            fr: "Si le Pokémon en défense attaque au cours du prochain virage de votre adversaire, tout dommage qu'il fait est réduit de 10 (avant d'appliquer une faiblesse et une résistance).",
            de: "Wenn die verteidigenden Pokemon -Angriffe während der nächsten Kurve Ihres Gegners, wird jeder Schaden um 10 reduziert (bevor sie Schwäche und Widerstand anwenden).",
            es: "Si el Pokémon defensor ataca durante el próximo turno de tu oponente, cualquier daño que cause se reduce en 10 (antes de aplicar debilidad y resistencia).",
            it: "Se gli attacchi di Pokemon in carica durante il prossimo turno dell'avversario, qualsiasi danno che fa viene ridotto di 10 (prima di applicare la debolezza e la resistenza).",
            pt: "Se os ataques de Pokémon em defesa durante o próximo turno do seu oponente, qualquer dano causado é reduzido em 10 (antes de aplicar fraqueza e resistência).",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Spike Ball Tackle",
            ja: "スパイクボールタックル",
            fr: "Tacle de balle de pointe",
            de: "Spike Ball Tackle",
            es: "Tackle de bola de espiga",
            it: "Attrezzatura a palla a spike",
            pt: "Tackle de bola de pico",
          },
          effect: {
            en: "Togepi does 10 damage to itself.",
            ja: "Togepiはそれ自体に10ダメージを与えます。",
            fr: "Togepi fait 10 dégâts à lui-même.",
            de: "Togepi schädigt sich 10.",
            es: "Tegepi hace 10 daños a sí mismo.",
            it: "Togepi fa 10 danni a se stesso.",
            pt: "TOGEPI causa 10 danos a si mesmo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
