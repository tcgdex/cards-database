import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Eldegoss"
	},

	illustrator: "Mina Nakai",
	rarity: "None",
	category: "Pokemon",
	dexId: [830],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Gossifleur"
	},

	description: {
		en: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Blessing of Fluff"
		},

		effect: {
			en: "Search your deck for up to 3 Grass Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Leafage"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card