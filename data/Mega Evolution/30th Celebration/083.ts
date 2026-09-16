import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [448],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	description: {
		en: "By reading the auras of all things, it can tell how others are feeling from over half a mile away."
	},

	attacks: [{
		name: {
			en: "Aura Sphere"
		},

		cost: ["Fighting", "Fighting", "Colorless"],

		damage: 100,

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907690,
				tcgplayer: 716479
			}
		}
	],
}

export default card
