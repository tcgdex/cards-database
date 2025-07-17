import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Ledyba - 004/088",
         ja: "Ledyba -004/088",
         fr: "Ledyba - 004/088",
         de: "Ledyba - 004/088",
         es: "Ledyba - 004/088",
         it: "Ledyba - 004/088",
         pt: "Ledyba - 004/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [165],
      hp: 40,
      types: ["Grass"],
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
            en: "During your opponent's next turn, any damage done to Ledyba by attacks is reduced by 20.",
            ja: "対戦相手の次のターン中に、攻撃によるLedybaに与えられた損害は20倍に減少します。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Ledyba par des attaques est réduit de 20.",
            de: "Während der nächsten Runde Ihres Gegners wird jeder Schaden, den Ledyba durch Angriffe angerichtet hat, um 20 reduziert.",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Ledyba por ataques se reduce en 20.",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Ledyba dagli attacchi viene ridotto di 20.",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao Ledyba por ataques é reduzido em 20.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Quick Turn",
            ja: "クイックターン",
            fr: "Virage rapide",
            de: "Schnelle Kurve",
            es: "Giro rápido",
            it: "Turni rapidi",
            pt: "Virada rápida",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
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
