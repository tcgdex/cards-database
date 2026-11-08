import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Braségali",
		'es-es': "Blaziken",
		'it-it': "Blaziken",
		'pt-br': "Blaziken",
		'de-de': "Lohgock"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Blaze Kick",
				'fr-fr': "Pied Brûleur"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage. If tails, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-Flamme"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Flames spout from its wrists, enveloping its knuckles. Its punches scorch it foes.",
	},

	thirdParty: {
		cardmarket: 280345,
		tcgplayer: 83911
	}
}

export default card
