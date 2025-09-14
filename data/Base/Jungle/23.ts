import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		de: "Nidoqueen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorina",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Boyfriends",
				fr: "Fiancés",
				de: "Minnesänger"
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
				fr: "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Nidoking que vous avez en jeu.",
				de: "Fügt 20 Schadenspunkte plus 20 weitere für jeden Nidoking zu, den du im Spiel hast."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Punch",
				fr: "Ultimapoing",
				de: "Megahieb"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ses écailles très résistantes et son corps massif sont des armes dévastatrices."
	},

	thirdParty: {
		cardmarket: 273804,
		tcgplayer: 106985
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	],
}

export default card
