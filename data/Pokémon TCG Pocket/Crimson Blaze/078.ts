import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Blastoise ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],

	evolveFrom: {
		en: "Wartortle"
	},

	description: {
		en: "The cannon on its back is as powerful as a\ntank gun. Its tough legs and back enable it to\nwithstand the recoil from firing the cannon."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Triple Bombardment"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "If this Pokémon has at least 3 extra {W} Energy attached, this attack also does 50 damage to 2 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card