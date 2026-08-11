import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'de-de': "Scherox"
	},

	illustrator: "Kent Kanetsuna/Direc. Shinji Higuchi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [212],

	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insecateur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe",
				'de-de': "Zerschneider"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Claw",
				'fr-fr': "Griffe acier",
				'de-de': "Metallklaue"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "Its wings are not used for flying. They are flapped at high speed to adjust its body temperature."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279260,
				tcgplayer: 88963
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279260,
				tcgplayer: 88963
			}
		}
	],

}

export default card
