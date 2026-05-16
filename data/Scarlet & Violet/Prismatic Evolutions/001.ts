import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [102],
	set: Set,

	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		pt: "Exeggcute",
		it: "Exeggcute",
		de: "Owei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			pt: "Aríete",
			it: "Carica",
			de: "Ramme"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Iori Suzuki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805390,
				tcgplayer: 610356
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805390,
				tcgplayer: 610356
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806408,
				tcgplayer: 610536
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806409,
				tcgplayer: 610637
			}
		},
	],
}

export default card
