import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [127],
	set: Set,

	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		pt: "Pinsir",
		it: "Pinsir",
		de: "Pinsir"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			pt: "Talho",
			it: "Lacerazione",
			de: "Schlitzer"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Uninori",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805392,
				tcgplayer: 610358
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805392,
				tcgplayer: 610358
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806412,
				tcgplayer: 610538
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806413,
				tcgplayer: 610639
			}
		},
	],
}

export default card
