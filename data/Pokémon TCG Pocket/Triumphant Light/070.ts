import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Arceus"
	},

	illustrator: "Nurikabe",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		en: "According to the legends of Sinnoh, this Pokémon<br />emerged from an egg and shaped all there is in<br />this world."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Power Blast"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Discard a random Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card