import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Chi-Yu",
		fr: "Yuyu",
		es: "Chi-Yu",
		'es-mx': "Chi-Yu",
		de: "Yuyu"
	},

	illustrator: "IKEDA Saki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1004],
	hp: 90,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Whirling Envy"
		},

		cost: ["Darkness"],

		damage: "20+",

		effect: {
			en: "If this Pokémon has 2 or more damage counters on it, this attack does 90 more damage. Don't apply Weakness for this attack's damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895844,
				tcgplayer: 704816
			}
		},
	],
}

export default card
