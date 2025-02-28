import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Piloswine"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Swinub"
	},

	description: {
		en: "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thick Fat"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks from <span class=\"energy-text energy-text--type-fire\"></span> or <span class=\"energy-text energy-text--type-water\"></span> Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card
