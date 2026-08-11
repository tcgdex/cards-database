import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
		'es-es': "Slakoth",
		'it-it': "Slakoth",
		'pt-br': "Slakoth",
		'de-de': "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "OKACHEKE",

	attacks: [{
		name: {
			'en-us': "Smack 'n' Slack",
			'fr-fr': "Raclée Dodo",
			'es-es': "Manotazo y Relajo",
			'it-it': "Schiaffopisolo",
			'pt-br': "Smack 'n' Slack",
			'de-de': "Raufen und Ratzen"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep.",
			'fr-fr': "Ce Pokémon est maintenant Endormi.",
			'es-es': "Este Pokémon pasa a estar Dormido.",
			'it-it': "Questo Pokémon viene addormentato.",
			'pt-br': "This Pokémon is now Asleep.",
			'de-de': "Dieses Pokémon schläft jetzt."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	dexId: [287],

	description: {
		'en-us': "If it eats just three leaves in a day, it is satisfied. Other than that, it sleeps for 20 hours a day."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574183,
				tcgplayer: 246856
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574183,
				tcgplayer: 246856
			}
		},
	],
}

export default card
