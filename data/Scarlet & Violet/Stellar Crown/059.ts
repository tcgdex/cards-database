import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
		de: "Mewtu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785913,
				tcgplayer: 567285
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785913,
				tcgplayer: 567285
			}
		},
	],

	illustrator: "kantaro",

}

export default card
