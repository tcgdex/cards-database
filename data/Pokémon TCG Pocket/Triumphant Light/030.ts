import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Clefable"
	},

	illustrator: "sui",
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
			en: "Moonblast"
		},

		damage: 60,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −30 damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card