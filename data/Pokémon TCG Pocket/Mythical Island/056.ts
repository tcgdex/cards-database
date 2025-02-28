import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		en: "Druddigon lives in caves, but it never skips sunbathing—it won't be able to move if its body gets too cold."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rough Skin"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Dragon Claw"
		},

		damage: 90,
		cost: ["Fire", "Water", "Colorless"]
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
