import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Cubone",
         ja: "キューボン",
         fr: "Cubone",
         de: "Cubone",
         es: "Cuboo",
         it: "Cubone",
         pt: "Cubone",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [104],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Teary Eyes",
            ja: "涙目",
            fr: "Yeux larmoyants",
            de: "Tränene Augen",
            es: "Ojos llorosos",
            it: "Occhi lacrimanti",
            pt: "Olhos lacrimejantes",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20.",
            ja: "対戦相手の次のターン中に、攻撃によってキューボンに与えられた損害は20倍に減少します。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Cubone par des attaques est réduit de 20.",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, den Cubone durch Angriffe angerichtet hat, um 20 reduziert.",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Cubone por ataques se reduce en 20.",
            it: "Durante il prossimo turno del tuo avversario, qualsiasi danno arrecato a Cubone dagli attacchi viene ridotto di 20.",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado a Cubone pelos ataques é reduzido em 20.",
          },
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
