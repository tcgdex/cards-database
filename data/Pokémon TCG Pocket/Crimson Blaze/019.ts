import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Wartortle"
	},

	description: {
		en: "The rocket cannons on its shell fire jets of water\ncapable of punching holes through thick steel."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Double Splash"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If this Pokémon has at least 2 extra {W} Energy attached, this attack also does 50 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card