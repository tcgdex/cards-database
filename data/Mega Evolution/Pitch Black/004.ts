import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Lurantis ex",
		fr: "Floramantis-ex",
		es: "Lurantis ex",
		'es-mx': "Lurantis ex",
		de: "Mantidea-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [754],
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		en: "Fomantis"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lively Cutter"
		},

		cost: ["Grass"],

		damage: "60+",

		effect: {
			en: "If this Pokémon recovered any HP this turn, this attack does 200 more damage."
		}
	}, {
		name: {
			en: "Leaf Guard"
		},

		cost: ["Grass", "Colorless"],

		damage: 140,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895792,
				tcgplayer: 704761
			}
		},
	],
}

export default card
