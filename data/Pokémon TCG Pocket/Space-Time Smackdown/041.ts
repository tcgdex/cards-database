import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gastrodon"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Shellos"
	},

	description: {
		en: "They normally inhabit rocky seashores, but in times of continuous rain, they can sometimes be found in the mountains, far from the sea."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Muddy Water"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card
