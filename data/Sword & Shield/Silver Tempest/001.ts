import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [48],
	set: Set,

	name: {
		en: "Venonat",
		fr: "Mimitoss",
		es: "Venonat",
		it: "Venonat",
		pt: "Venonat",
		de: "Bluzuk"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Lives in the shadows of tall trees where it eats bugs. It is attracted by light at night.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682040,
				tcgplayer: 451620
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682040,
				tcgplayer: 451620
			}
		},
	],
}

export default card
