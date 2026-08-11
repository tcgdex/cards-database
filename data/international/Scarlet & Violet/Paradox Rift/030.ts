import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [116],
	set: Set,

	name: {
		en: "Horsea",
		fr: "Hypotrempe",
		es: "Horsea",
		it: "Horsea",
		pt: "Horsea",
		de: "Seeper"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			pt: "Gancho",
			de: "Haken"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740506,
				tcgplayer: 523639,
				cardtrader: 265069
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740506,
				tcgplayer: 523639,
				cardtrader: 265069
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	
}

export default card
