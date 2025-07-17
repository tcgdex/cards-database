import {Card} from "../../../interfaces"
import Set from "../PMCG1"

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

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 120,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Scrunch",
            ja: "スクランチ",
            fr: "Frotter",
            de: "Scrunch",
            es: "Crujir",
            it: "Scricchiolio",
            pt: "Scrunch",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokemon by attacks.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、攻撃によってこのポケモンに与えられたすべてのダメージを防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, évitez tous les dégâts causés à ce pokemon par des attaques.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Kurve Ihres Gegners alle Schäden dieses Pokémon durch Angriffe verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todo el daño causado a este Pokémon por ataques.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono tutti i danni arrecati a questo Pokemon dagli attacchi.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os danos causados a este Pokémon por ataques.",
          },

        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Double-Edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "This Pokemon also does 80 damage to itself.",
            ja: "このポケモンは、それ自体に80のダメージを与えます。",
            fr: "Ce Pokémon fait également 80 dégâts à lui-même.",
            de: "Dieses Pokémon schädigt sich auch 80.",
            es: "Este Pokémon también hace 80 daños a sí mismo.",
            it: "Questo Pokemon fa anche 80 danni a se stesso.",
            pt: "Este Pokémon também causa 80 danos a si mesmo.",
          },
          damage: 80,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
