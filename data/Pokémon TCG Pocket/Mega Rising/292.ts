import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It's one of the legendary bird Pokémon. When\nMoltres flaps its flaming wings, they glimmer with\na dazzling red glow."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sky Attack"
		},

		damage: 130,
		cost: ["Fire", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card