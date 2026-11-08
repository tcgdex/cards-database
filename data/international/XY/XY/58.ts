import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mine",
				'fr-fr': "Mine",
				'es-es': "Mina",
				'it-it': "Miniera",
				'pt-br': "Mina",
				'de-de': "Abbau"
			},
			effect: {
				'en-us': "Look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck.",
				'fr-fr': "Regardez la carte du dessus du deck de votre adversaire. Ensuite, vous pouvez demander à votre adversaire de mélanger son deck.",
				'es-es': "Mira la primera carta de la baraja de tu rival. Después, puedes hacer que tu rival baraje las cartas de su baraja.",
				'it-it': "Guarda la carta in cima al mazzo del tuo avversario. Poi, puoi fargli rimischiare il suo mazzo.",
				'pt-br': "Olhe o card de cima do baralho do seu oponente. Em seguida, você poderá fazer com que seu oponente o embaralhe.",
				'de-de': "Schau dir die oberste Karte des Decks deines Gegners an. Anschließend kannst du deinen Gegner veranlassen, sein Deck zu mischen."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud'Boue",
				'es-es': "Bofetón Lodo",
				'it-it': "Fangosberla",
				'pt-br': "Tapa de Lama",
				'de-de': "Lehmschelle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Lives about one yard underground where it feeds on plant roots. It sometimes appears aboveground.",
	},

	thirdParty: {
		cardmarket: 281395,
		tcgplayer: 84827
	}
}

export default card
