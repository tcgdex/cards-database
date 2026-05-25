import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna"
	},

	illustrator: "Mugi Hamada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [14],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Weedle"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Exoskeleton"
		},

		effect: {
			en: "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Hang Down"
		},

		cost: ["Grass"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693502
			}
		}
	],
}

export default card