import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Altaria"
	},

	illustrator: "miki kudo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	evolveFrom: {
		en: "Swablu"
	},

	description: {
		en: "If it bonds with a person, it will gently envelop\nthe friend with its soft wings, then hum."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dragon Arcana"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has 2 or more different types of Energy attached, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2
}

export default card