import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [449],
	set: Set,

	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		pt: "Hippopotas",
		it: "Hippopotas",
		de: "Hippopotas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			pt: "Investida",
			it: "Azione",
			de: "Tackle"
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "H",
	illustrator: "HYOGONOSUKE",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805441,
				tcgplayer: 610407
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805441,
				tcgplayer: 610407
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806480,
				tcgplayer: 610573
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806481,
				tcgplayer: 610674
			}
		},
	],
}

export default card
