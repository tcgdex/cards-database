import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		'es-mx': "Grubbin",
		de: "Mabula"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [736],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "String Shot"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895790,
				tcgplayer: 704759
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895790,
				tcgplayer: 704759
			}
		},
	],
}

export default card
