import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Circle Circuit"
		},

		damage: "10×",
		cost: ["Lightning"],

		effect: {
			en: "This attack does 10 damage for each of your Benched <span class=\"energy-text energy-text--type-lightning\"></span> Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
