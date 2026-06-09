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

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "With a voice like a human child's, it cries out to lure adults deep into the forest, getting them lost among the trees.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725091,
				tcgplayer: 509671,
				cardtrader: 255571
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725091,
				tcgplayer: 509671,
				cardtrader: 255571
			}
		},
	],

	illustrator: "Narumi Sato",

	
}

export default card
