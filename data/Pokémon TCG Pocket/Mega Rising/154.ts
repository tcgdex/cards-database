import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai",
		fr: "Darkrai"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [491],
	hp: 120,
	types: ["Darkness"],

	description: {
		en: "It can lull people to sleep and make them dream.\nIt is active during nights of the new moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow Cage",
			fr: "Cage d'Ombre"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card