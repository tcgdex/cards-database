import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		pt: "Sneasel",
		it: "Sneasel",
		de: "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			pt: "Golpe de Garra",
			it: "Lacerartiglio",
			de: "Klauenschlitzer"
		},

		damage: 20
	}],

	retreat: 0,
	regulationMark: "H",
	illustrator: "Kurata So",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805450,
				tcgplayer: 610416
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805450,
				tcgplayer: 610416
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806492,
				tcgplayer: 610579
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806493,
				tcgplayer: 610680
			}
		},
	],
}

export default card
