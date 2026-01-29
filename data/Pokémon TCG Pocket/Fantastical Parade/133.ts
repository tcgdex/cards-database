import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Swellow"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Taillow"
	},

	description: {
		en: "It dives at a steep angle as soon as it spots its\nprey. It catches its prey with sharp claws."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Repelling Wind"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Basic Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card