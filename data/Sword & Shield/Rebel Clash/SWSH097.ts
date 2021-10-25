import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Dragapult VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	dexId: [887],
	hp: 320,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dragapult V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Shred"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Max Phantom"
		},

		effect: {
			en: "Put 5 damage counters on your opponent's Benched Pokémon in any way you like."
		},

		damage: 130
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