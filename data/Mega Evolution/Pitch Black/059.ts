import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "The envy accumulated within curved beads that sparked multiple conflicts has clad itself in fire and become a Pokémon.",
		de: "Der Neid, der sich in Krummjuwelen sammelte, die viel Streit heraufbeschworen, hüllte sich in Feuer und wurde zu diesem Pokémon."
	},

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
			en: "Whirling Envy",
			de: "Wirbelnder Neid"
		},

		cost: ["Darkness"],

		damage: "20+",

		effect: {
			en: "If this Pokémon has 2 or more damage counters on it, this attack does 90 more damage. Don't apply Weakness for this attack's damage.",
			de: "Wenn auf diesem Pokémon 2 oder mehr Schadensmarken liegen, fügt diese Attacke 90 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
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
