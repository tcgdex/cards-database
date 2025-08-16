import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		de: "Scherox"
	},

	illustrator: "Kent Kanetsuna/Direc. Shinji Higuchi",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Scyther",
		fr: "Insecateur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				de: "Zerschneider"
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
				en: "Metal Claw",
				fr: "Griffe acier",
				de: "Metallklaue"
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
		en: "Its wings are not used for flying. They are flapped at high speed to adjust its body temperature."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279260,
		tcgplayer: 88963
	}
}

export default card
