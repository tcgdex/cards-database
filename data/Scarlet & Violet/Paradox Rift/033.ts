import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [223],
	set: Set,

	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		es: "Remoraid",
		it: "Remoraid",
		pt: "Remoraid",
		de: "Remoraid"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sprinkle Water",
			fr: "Eau Aspergeante",
			es: "Esparcir Agua",
			it: "Goccioline",
			pt: "Aspergir Água",
			de: "Wassersprüher"
		},

		damage: 10
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
		en: "Using its dorsal fin as a suction pad, it clings to a Mantine's underside to scavenge for leftovers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740509,
				tcgplayer: 523642,
				cardtrader: 265177
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740509,
				tcgplayer: 523642,
				cardtrader: 265177
			}
		},
	],

	illustrator: "Midori Harada",

	
}

export default card
