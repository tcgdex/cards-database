import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru"
	},

	illustrator: "Oswaldo KATO",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "With the long hairs on its back, this Pokémon\ntakes in electricity from other electric Pokémon.\nIt stores what it absorbs in an electric sac."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bristling Spikes"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack, do 30 damage to the Attacking Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card