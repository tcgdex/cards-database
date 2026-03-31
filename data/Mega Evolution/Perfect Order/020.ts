import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		de: "Sterndu",
		it: "Staryu",
		pt: "Staryu"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		120
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				de: "Aquaknarre",
				it: "Pistolacqua",
				pt: "Revólver d'Água"
			},
			damage: "20"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Takeshi Nakamura",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684374,
		cardmarket: 877432
	}
}

export default card
