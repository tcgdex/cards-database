import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash ex"
	},

	illustrator: "Kuroimori",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [78],
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Ponyta"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Sprinting Flare"
		},

		damage: 110,
		cost: ["Fire", "Fire", "Fire"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card