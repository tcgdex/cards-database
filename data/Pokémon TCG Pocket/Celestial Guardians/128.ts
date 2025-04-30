import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rising Lunge"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card