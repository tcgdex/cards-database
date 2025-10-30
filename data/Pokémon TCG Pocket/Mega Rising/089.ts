import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Attack the Wound"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card