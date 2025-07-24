import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Seel - 022/088",
         ja: "SEEL -022/088",
         fr: "Seel - 022/088",
         de: "Seel - 022/088",
         es: "Seel - 022/088",
         it: "Seel - 022/088",
         pt: "Seel - 022/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [86],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Cold Breath",
            ja: "コールドブレス",
            fr: "Souffle froid",
            de: "Kaltem Atem",
            es: "Respiración fría",
            it: "Bispio freddo",
            pt: "Respiração fria",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
