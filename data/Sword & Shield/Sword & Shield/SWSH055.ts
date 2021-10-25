import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Hatterene V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "None",
	category: "Pokemon",
	dexId: [858],
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Confounding Pulse"
		},

		effect: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Mental Crush"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage."
		},

		damage: "90+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card