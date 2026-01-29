import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Diggersby"
	},

	illustrator: "Mina Nakai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Bunnelby"
	},

	description: {
		en: "The fur on its belly retains heat exceptionally\nwell. People used to make heavy winter clothing\nfrom fur shed by this Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Earthquake"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card