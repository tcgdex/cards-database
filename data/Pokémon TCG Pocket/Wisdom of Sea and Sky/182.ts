import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Hoothoot",
		fr: "Hoothoot"
	},

	illustrator: "Uninori",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "It always stands on one foot. It changes feet so\nfast, the movement can rarely be seen.",
		fr: "Il se tient toujours sur un pied. Il en change si vite qu'on peut à peine distinguer ce mouvement."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Insomnia",
			fr: "Insomnia"
		},

		effect: {
			en: "This Pokémon can't be Asleep.",
			fr: "Ce Pokémon ne peut pas être Endormi."
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card