import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon"
	},

	illustrator: "DOM",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Charmander"
	},

	description: {
		en: "If it becomes agitated during battle, it spouts\nintense flames, incinerating its surroundings."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ignition"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may take a {R} Energy from your Energy Zone and attach it to your Active {R} Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Steady Firebreathing"
		},

		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card