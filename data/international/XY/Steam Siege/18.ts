import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram",
		'es-es': "Chimchar",
		'it-it': "Chimchar",
		'pt-br': "Chimchar",
		'de-de': "Panflam"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		390,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Ember",
				'fr-fr': "Flammèche",
				'es-es': "Ascuas",
				'it-it': "Braciere",
				'pt-br': "Brasa",
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
			damage: 30,

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
		'en-us': "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
	},

	thirdParty: {
		cardmarket: 291614,
		tcgplayer: 121007
	}
}

export default card
