import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Clefable"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Clefairy"
	},

	description: {
		en: "A timid fairy Pokémon that is rarely seen, it will<br />run and hide the moment it senses people."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Moon Kick"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card