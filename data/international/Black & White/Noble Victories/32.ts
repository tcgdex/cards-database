import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Icy Wind",
				'fr-fr': "Vent Glace",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Shard",
				'fr-fr': "Éclats Glace",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Fighting Pokémon, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Fighting, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
	},

	thirdParty: {
		cardmarket: 280155,
		tcgplayer: 84512
	}
}

export default card
