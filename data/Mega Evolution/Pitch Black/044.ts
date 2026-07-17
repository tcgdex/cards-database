import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Cranidos",
		fr: "Kranidos",
		es: "Cranidos",
		'es-mx': "Cranidos",
		de: "Koknodon"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [408],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Antique Skull Fossil"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Push Down"
		},

		cost: ["Fighting", "Fighting"],

		damage: 70,

		effect: {
			en: "Your opponent switches their Active Pokémon for 1 of their Benched Pokémon"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895830,
				tcgplayer: 704801
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895830,
				tcgplayer: 704801
			}
		},
	],
}

export default card
