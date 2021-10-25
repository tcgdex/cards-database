import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "None",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],

	description: {
		en: "You shouldn't get close to the child when it's playing outside its mother's pouch. Its mother is always nearby watching over it."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rally Back"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hammer In"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card