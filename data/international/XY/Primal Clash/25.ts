import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu",
		'es-es': "Torchic",
		'it-it': "Torchic",
		'pt-br': "Torchic",
		'de-de': "Flemmli"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		255,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'es-es': "Ascuas",
				'it-it': "Braciere",
				'pt-br': "Ember",
				'de-de': "Glut"
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cruz, descarta 1 Energía Fire unida a este Pokémon.",
				'it-it': "Lancia una moneta. Se esce croce, scarta un'Energia Fire assegnata a questo Pokémon.",
				'pt-br': "Jogue uma moeda. Se sair coroa, descarte uma Energia Fire ligada a este Pokémon.",
				'de-de': "Wirf 1 Münze. Lege bei \"Zahl\" 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A fire burns inside, so it feels very warm to hug. It launches fireballs of 1,800 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 273556,
		tcgplayer: 95909
	}
}

export default card
