import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [722],
	set: Set,

	name: {
		fr: "Brindibou",
		en: "Rowlet",
		es: "Rowlet",
		it: "Rowlet",
		pt: "Rowlet",
		de: "Bauz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Aile Tranchante",
			en: "Razor Wing",
			es: "Ala Cortante",
			it: "Ala Tagliente",
			pt: "Asa Cortante",
			de: "Rasierflügel"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725093,
				tcgplayer: 509692,
				cardtrader: 255573
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 789503
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725093,
				tcgplayer: 509692,
				cardtrader: 255573
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
