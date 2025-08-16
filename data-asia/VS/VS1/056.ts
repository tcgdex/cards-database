import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Espeon",
         ja: "サブリナのエスペオン",
         fr: "Sabrina's Espeon",
         de: "Sabrinas Espeon",
         es: "Espón de Sabrina",
         it: "Sabrina's Expeon",
         pt: "Espeon de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [196],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sun Flash",
            ja: "サンフラッシュ",
            fr: "Flash",
            de: "Sonnenblitz",
            es: "Flash",
            it: "Sun Flash",
            pt: "Sun Flash",
          },
          effect: {
            en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
            ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
            fr: "Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada.",
            it: "Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla.",
            pt: "Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Psywave",
            ja: "Psywave",
            fr: "Psywave",
            de: "Psywave",
            es: "Psíquica",
            it: "Psywave",
            pt: "Psywave",
          },
          effect: {
            en: "This attack does 10 damage times the number of Energy cards on the Defending Pokemon.",
            ja: "この攻撃は、防御ポケモンのエネルギーカードの数を10回ダメージします。",
            fr: "Cette attaque fait 10 dégâts le nombre de cartes d'énergie sur le Pokémon en défense.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Energiekarten auf dem verteidigenden Pokémon.",
            es: "Este ataque hace 10 veces el número de cartas de energía en el Pokémon defensor.",
            it: "Questo attacco fa 10 danni volte il numero di carte energetiche sul Pokemon in carica.",
            pt: "Esse ataque causa 10 danos vezes o número de cartões de energia no Pokémon defensor.",
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
