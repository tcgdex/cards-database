import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Chesnaught"
	},

	illustrator: "5ban Graphics",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		en: "Quilladin"
	},

	description: {
		en: "Its gentle disposition would have it avoid\nconflict, but it gives opponents a thrashing with\nits thorned fists when the situation calls for it."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Needle Lariat"
		},

		damage: 80,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 80 damage to the Attacking Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card