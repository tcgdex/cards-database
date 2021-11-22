import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		357,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bonus Leaf",
				fr: "Feuille bonus"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon that has any Grass Energy attached to it.",
				fr: "Retirez 3 marqueurs de dégât à chacun de vos Pokémon de Banc possédant une Énergie Grass."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "À force de manger son fruit préféré, il a fini par pousser autour de son cou."
	}
}

export default card
