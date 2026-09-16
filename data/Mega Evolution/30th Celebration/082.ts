import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Groudon"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [383],
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	description: {
		en: "Groudon is said to have expanded the reach of dry land by evaporating water with raging heat. It battled ferociously against Kyogre."
	},

	attacks: [{
		name: {
			en: "Break Ground"
		},

		cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"],

		damage: 250,

		effect: {
			en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907689,
				tcgplayer: 716478
			}
		}
	],
}

export default card
