import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Terrakion",
		fr: "Terrakium"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [639],
	hp: 120,
	types: ["Fighting"],

	description: {
		en: "It has phenomenal power. It will mercilessly crush\nanyone or anything that bullies small Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sacred Sword",
			fr: "Lame Sainte"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Sacred Sword.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Lame Sainte."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card