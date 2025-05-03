import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Spear"
		},

		cost: ["Lightning", "Lightning"],

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card
