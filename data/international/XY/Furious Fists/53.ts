import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
		'es-es': "Trapinch",
		'it-it': "Trapinch",
		'pt-br': "Trapinch",
		'de-de': "Knacklion"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		328,
	],

	hp: 60,

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
				'en-us': "Mountain Munch",
				'fr-fr': "Dévore-Montagne",
				'es-es': "Mascamontañas",
				'it-it': "Sgranocchiacime",
				'pt-br': "Masca Montanhas",
				'de-de': "Gipfelmampfer"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la carta in cima al mazzo del tuo avversario.",
				'pt-br': "Descarte o card de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
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

			damage: 10,

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
		'en-us': "It lives in arid deserts. It makes a sloping pit trap in sand where it patiently awaits prey.",
	},

	thirdParty: {
		cardmarket: 281717,
		tcgplayer: 92230
	}
}

export default card
