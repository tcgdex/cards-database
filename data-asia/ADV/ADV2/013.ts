import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Typhlosion ex",
         ja: "Typhlosion Ex",
         fr: "Typhlosion ex",
         de: "Typhlosion ex",
         es: "Typhlosion ex",
         it: "Typhlosion Ex",
         pt: "Typhlosion Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [157],
      hp: 160,
      types: ["Fire"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Ring of Fire",
            ja: "火のリング",
            fr: "Anneau de feu",
            de: "Feuerring",
            es: "Anillo de fuego",
            it: "Anello di fuoco",
            pt: "Anel de fogo",
          },
          effect: {
            en: "The Defending Pokemon is now Burned, and can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは現在燃えており、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense est maintenant brûlé et ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokemon ist jetzt verbrannt und kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor ahora se quema, y no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica viene ora bruciato e non può ritirarsi fino alla fine del prossimo turno del tuo avversario.",
            pt: "O Pokémon atual agora está queimado e não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 40,
        },
        {
          cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Split Blast",
            ja: "スプリットブラスト",
            fr: "Explosion",
            de: "Split Explosion",
            es: "Explosión dividida",
            it: "Esplosione divisa",
            pt: "Blasta dividida",
          },
          effect: {
            en: "Discard 1 Energy card attached to Typhlosion ex. If your opponent has more than 1 Defending Pokemon, you may do 50 damage to each of them instead.",
            ja: "Typhlosion Exに取り付けられた1つのエネルギーカードを廃棄します。対戦相手が1つ以上の防御ポケモンを持っている場合、代わりにそれぞれに50のダメージを与えることができます。",
            fr: "Jetez 1 carte d'énergie attachée à Typhlosion Ex. Si votre adversaire a plus d'un Pokémon en défense, vous pouvez faire 50 dégâts à chacun d'eux à la place.",
            de: "Lösen Sie 1 Energiekarte an die Typhlosion ex. Wenn Ihr Gegner mehr als 1 verteidigendes Pokémon hat, können Sie stattdessen jeweils 50 Schäden anrichten.",
            es: "Descarte 1 Tarjeta de energía unida a Typhlosion Ex. Si tu oponente tiene más de 1 Pokémon defensores, puedes hacer 50 daños a cada uno de ellos.",
            it: "Scartare 1 carta di energia collegata alla tiflosione Ex. Se il tuo avversario ha più di 1 Pokemon in difesa, puoi invece fare 50 danni a ciascuno di essi.",
            pt: "Descarte 1 cartão de energia anexado à tiflosão Ex. Se o seu oponente tiver mais de 1 Pokemon defendendo, você poderá causar 50 danos a cada um deles.",
          },
          damage: 100,
        },
      ],

      retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
