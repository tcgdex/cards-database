import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Chingling"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "There is an orb inside its mouth. When it hops,\nthe orb bounces all over and makes a\nringing sound."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Jingly Noise"
		},

		damage: 10,

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card