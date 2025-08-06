import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [708],
	set: Set,

	name: {
		fr: "Brocélôme",
		en: "Phantump",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tapotige",
			en: "Branch Poke",
			es: "Punzada Rama",
			it: "Ramostoccata",
			pt: "Cutucada com Galho",
			de: "Zweigstoß"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Narumi Sato",

	thirdParty: {
		cardmarket: 725091
	}
}

export default card