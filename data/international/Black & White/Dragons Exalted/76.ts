import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'es-es': "Stunky",
		'it-it': "Stunky",
		'pt-br': "Stunky",
		'de-de': "Skunkapuh"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		434,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Acid Spray",
				'fr-fr': "Bombe Acide",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.",
	},

	thirdParty: {
		cardmarket: 280515,
		tcgplayer: 89588
	}
}

export default card
