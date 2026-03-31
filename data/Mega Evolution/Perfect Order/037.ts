import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Nosepass",
		fr: "Tarinor",
		es: "Nosepass",
		de: "Nasgnet",
		it: "Nosepass",
		pt: "Nosepass"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		299
	],
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting"
			],
			name: {
				en: "Rolling Rocks",
				fr: "Rochers Roulants",
				es: "Rocas Rodantes",
				de: "Rollende Steine",
				it: "Massi Rotolanti",
				pt: "Pedras Rolantes"
			},
			damage: "40"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Jerky",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684422,
		cardmarket: 877451
	}
}

export default card
