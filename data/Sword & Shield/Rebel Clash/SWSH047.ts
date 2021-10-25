import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Drednaw"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	dexId: [834],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Chewtle"
	},

	description: {
		en: "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Vise Bite"
		},

		effect: {
			en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost."
		},

		damage: "60+"
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Jaw Lock"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card