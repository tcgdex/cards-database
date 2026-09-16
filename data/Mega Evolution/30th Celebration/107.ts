import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zamazenta"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [889],
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	description: {
		en: "Its ability to deflect any attack led to it being known as the Fighting Master's Shield. It was feared and respected by all."
	},

	attacks: [{
		name: {
			en: "Fend Off"
		},

		cost: ["Metal"],

		damage: 20,

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		}
	}, {
		name: {
			en: "Shield Press"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 100,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907714,
				tcgplayer: 716500
			}
		}
	],
}

export default card
