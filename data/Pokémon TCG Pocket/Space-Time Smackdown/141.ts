import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Chatot"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Attack"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
