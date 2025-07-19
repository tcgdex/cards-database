import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Togepi (Delta Species)",
         ja: "Togepi（デルタ種）",
         fr: "Togepi (espèces delta)",
         de: "Togepi (Delta -Arten)",
         es: "Tegepi (especie delta)",
         it: "Togepi (Delta Species)",
         pt: "TOGEPI (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [175],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
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
            en: "During your opponent's next turn, any damage done by attacks from the Defending Pokemon is reduced by 20 (before applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、防御ポケモンからの攻撃によって与えられた損害は20増加します（脱力感と抵抗を適用する前）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé par les attaques du Pokémon en défense est réduit de 20 (avant d'appliquer la faiblesse et la résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden durch Angriffe des verteidigenden Pokémon um 20 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho por los ataques del Pokémon defensor se reduce en 20 (antes de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno causato dagli attacchi del Pokemon in carica viene ridotto di 20 (prima di applicare la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado por ataques do pokemon atual é reduzido em 20 (antes de aplicar fraqueza e resistência).",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
