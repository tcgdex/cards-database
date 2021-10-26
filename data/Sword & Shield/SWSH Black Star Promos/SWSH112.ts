import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Anesaki Dynamic",
	category: "Pokemon",

	description: {
		en: "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
	},

	stage: "Stage2",

	name: {
		en: "Cinderace"
	},

	rarity: "None",
	dexId: [815],
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Raboot"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Crisis Power"
		},

		effect: {
			en: "This Pokémon's attacks do 30 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fireball Shot"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
