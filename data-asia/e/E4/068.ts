import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Snubbull",
         ja: "Snubbull",
         fr: "Snubbull",
         de: "Snubbull",
         es: "Desorden",
         it: "Snubbull",
         pt: "Snubbull",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [209],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scary Face",
            ja: "怖い顔",
            fr: "Visage effrayant",
            de: "Beängstigendes Gesicht",
            es: "Cara de miedo",
            it: "Faccia spaventosa",
            pt: "Rosto assustador",
          },
          effect: {
            en: "Flip a coin. If heads, until the end of your opponent's next turn the Defending Pokemon can't attack or retreat.",
            ja: "コインをひっくり返します。頭の場合、対戦相手の次の終わりまで、防御するポケモンは攻撃したり後退したりすることはできません。",
            fr: "Retourner une pièce. Si les têtes, jusqu'à la fin du prochain, tournez le prochain, le Pokémon en défense ne peut pas attaquer ou se retirer.",
            de: "Eine Münze drehen. Wenn der Köpfe bis zum Ende Ihres Gegners in der nächsten Kurve der Titelverteidiger kann nicht angreifen oder sich zurückziehen.",
            es: "Voltea una moneda. Si se dirige, hasta el final del próximo turno de tu oponente, el Pokémon defensor no puede atacar o retirarse.",
            it: "Capovolgi una moneta. Se la testa, fino alla fine del prossimo avversario, il Pokemon in difesa non può attaccare o ritirarsi.",
            pt: "Vire uma moeda. Se as cabeças, até o final do próximo turno do seu oponente, o Pokémon atual não poderá atacar ou recuar.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
