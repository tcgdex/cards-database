import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine"
	},

	illustrator: "match",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		en: "Piloswine"
	},

	description: {
		en: "This Pokémon can be spotted in wall paintings from as far back as 10,000 years ago. For a while, it was thought to have gone extinct."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thick Fat"
		},

		effect: {
			en: "This Pokémon takes −30 damage from attacks from <span class=\"energy-text energy-text--type-fire\"></span> or <span class=\"energy-text energy-text--type-water\"></span> Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Frosty Flattening"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4
}

export default card
