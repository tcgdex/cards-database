import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Charmeleon",
         ja: "チャームレオン",
         fr: "Charmeon",
         de: "Charmeleon",
         es: "Encantador",
         it: "CAMBELEON",
         pt: "Charmeleon",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [5],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

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
            en: "Flip a coin. If heads, the Defending Pokemon can't attack or retreat during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃したり退却したりすることはできません。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer ou se retirer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn das verteidigende Pokémon während der nächsten Runde Ihres Gegners nicht angreifen oder sich zurückzieht, kann er nicht angreifen oder sich zurückziehen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar o retirarse durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in carica non può attaccare o ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon atual não pode atacar ou recuar durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flame Tail",
            ja: "炎の尾",
            fr: "Queue de flamme",
            de: "Flammenschwanz",
            es: "Cola de llamas",
            it: "Coda di fiamma",
            pt: "Cauda de chama",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
