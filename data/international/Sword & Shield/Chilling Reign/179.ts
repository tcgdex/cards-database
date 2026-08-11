import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		'fr-fr': "Roigada de Galar V",
		'en-us': "Galarian Slowking V",
		'es-es': "Slowking de Galar V",
		'it-it': "Slowking di Galar V",
		'pt-br': "Slowking de Galar V",
		'de-de': "Galar-Laschoking V"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			'fr-fr': "Concoction",
			'en-us': "Concoction",
			'es-es': "Brebaje",
			'it-it': "Intruglio",
			'pt-br': "Elixir Mágico",
			'de-de': "Gebräu"
		},

		effect: {
			'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			'en-us': "Discard a card from your hand. If you do, draw 3 cards.",
			'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			'pt-br': "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Promesse de Déclin",
			'en-us': "Word of Ruin",
			'es-es': "Palabra de Perdición",
			'it-it': "Parola Nefasta",
			'pt-br': "Maldizer",
			'de-de': "Wort des Verderbens"
		},

		effect: {
			'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur sera mis K.O.",
			'en-us': "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out.",
			'es-es': "Al final del próximo turno de tu rival, el Pokémon Defensor quedará Fuera de Combate.",
			'it-it': "Alla fine del prossimo turno del tuo avversario, il Pokémon difensore verrà messo KO.",
			'pt-br': "O Pokémon Defensor será Nocauteado no final do próximo turno do seu oponente.",
			'de-de': "Am Ende des nächsten Zuges deines Gegners wird das Verteidigende Pokémon kampfunfähig."
		},

		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567287,
				tcgplayer: 241772
			}
		},
	],
}

export default card
