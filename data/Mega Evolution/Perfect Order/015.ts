import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		de: "Molunk",
		it: "Salandit",
		pt: "Salandit"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		757
	],
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Fire"
			],
			name: {
				en: "Fire Claws",
				fr: "Griffes Enflammées",
				es: "Garras de Fuego",
				de: "Feuerkrallen",
				it: "Artigli Infuocati",
				pt: "Garras de Fogo"
			},
			damage: "20"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kazuhisa Uragami",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684382,
		cardmarket: 877427
	}
}

export default card
