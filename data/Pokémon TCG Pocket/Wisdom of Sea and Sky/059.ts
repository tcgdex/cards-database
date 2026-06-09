import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Suicune",
		fr: "Suicune"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [245],
	hp: 100,
	types: ["Water"],

	description: {
		en: "It races around the world to purify fouled water.\nIt dashes away with the north wind.",
		fr: "Il parcourt le vaste monde pour purifier les eaux polluées. Il accompagne le vent du nord."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cure Stream",
			fr: "Ruisseau Guérisseur"
		},

		damage: 70,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do −20 damage.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent − 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card