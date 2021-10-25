import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Hatenna"
	},

	illustrator: "Misa Tsutsui",
	rarity: "None",
	category: "Pokemon",
	dexId: [856],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "Via the protrusion on its head, it senses other creatures' emotions. If you don't have a calm disposition, it will never warm up to you."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Find a Friend"
		},

		effect: {
			en: "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Psyshot"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card