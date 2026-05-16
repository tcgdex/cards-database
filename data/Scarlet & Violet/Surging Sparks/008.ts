import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [755],
	set: Set,

	name: {
		en: "Morelull",
		fr: "Spododo",
		es: "Morelull",
		it: "Morelull",
		pt: "Morelull",
		de: "Bubungus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Attach",
			fr: "Accrochage",
			es: "Pegarse",
			it: "Appiccicoso",
			pt: "Conectar",
			de: "Festkleben"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794263,
				tcgplayer: 590009
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794263,
				tcgplayer: 590009
			}
		},
	],

	illustrator: "Tomokazu Komiya",
	
}

export default card
