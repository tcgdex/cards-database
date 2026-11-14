import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Floragato",
		fr: "Matourgeon",
		de: "Feliospa",
		es: "Floragato",
		it: "Floragato",
		pt: "Floragato",
		'es-mx': "Floragato"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			'es-mx': "Cuchillada"
		},

		damage: 60,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726514,
				cardmarket: 918823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726514,
				cardmarket: 918823
			}
		}
	],
}

export default card