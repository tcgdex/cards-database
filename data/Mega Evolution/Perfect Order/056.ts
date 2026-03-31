import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		de: "Gramokles",
		it: "Honedge",
		pt: "Honedge"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		679
	],
	hp: 70,
	types: [
		"Metal"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				es: "Corte",
				de: "Zerschneider",
				it: "Taglio",
				pt: "Cortar"
			},
			damage: "10"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Apios",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684378,
		cardmarket: 877472
	}
}

export default card
