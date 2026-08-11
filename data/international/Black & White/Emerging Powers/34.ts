import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Stun Needle",
				'fr-fr': "Para-Dard",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
	},

	thirdParty: {
		cardmarket: 279999,
		tcgplayer: 85611
	}
}

export default card
