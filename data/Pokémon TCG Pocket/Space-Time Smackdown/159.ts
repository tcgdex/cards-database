import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin"
	},

	illustrator: "REND",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fragrant Flower Garden"
		},

		effect: {
			en: "Once during your turn, you may heal 10 damage from each of your Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Flop"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
