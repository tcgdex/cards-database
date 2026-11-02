import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		en: "Machop",
		fr: "Machoc"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Fighting"
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage"
			},
			damage: 20
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	description: {
		en: "It hefts a GRAVELER repeatedly to strengthen its entire body. It uses every type of martial arts."
	},

	retreat: 2,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278017,
				tcgplayer: 86996
			}
		},
	],

}

export default card
