import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Grookey",
		fr: "Ouistempo",
		es: "Grookey",
		it: "Grookey",
		pt: "Grookey",
		de: "Chimpep"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [810],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Tapotige",
			en: "Branch Poke",
			es: "Punzada Rama",
			it: "Ramostoccata",
			pt: "Cutucada com Galho",
			de: "Zweigstoß"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886621,
				tcgplayer: 699876
			}
		},
	],
}

export default card
