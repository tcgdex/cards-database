import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Indeedee ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Watch Over"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from your Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic"
		},

		damage: 30,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card