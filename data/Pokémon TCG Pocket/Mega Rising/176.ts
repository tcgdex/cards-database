import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin"
	},

	illustrator: "hatachu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [621],
	hp: 110,
	types: ["Dragon"],

	description: {
		en: "Druddigon are vicious and cunning. They take up\nresidence in nests dug out by other Pokémon,\ntreating the stolen nests as their own lairs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Giga Claw",
			fr: "Giga Griffe"
		},

		damage: 120,
		cost: ["Fire", "Water", "Colorless", "Colorless"],

		effect: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si toutes sont côté pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card