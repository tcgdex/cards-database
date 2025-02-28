import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage2",
	evolveFrom: {
		en: "Pidgeotto"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Drive Off"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
	}
}

export default card
