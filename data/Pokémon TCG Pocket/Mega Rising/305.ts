import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [96],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "It remembers every dream it eats. It rarely eats\nthe dreams of adults because children's are much\ntastier.",
		fr: "Ce Pokémon se souvient de tous les rêves\\nqu'il a avalés. Il mange rarement les songes\\nd'adultes, car ceux des enfants ont meilleur goût."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mumble",
			fr: "Murmure"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card