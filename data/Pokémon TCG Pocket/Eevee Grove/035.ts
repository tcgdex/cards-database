import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu"
	},

	illustrator: "Eri Yamaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "This Pokémon lives in dark places untouched by\nsunlight. When it appears before humans, it hides\nitself under a cloth that resembles a Pikachu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Try to Imitate"
		},

		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Flip a coin. If heads, choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card