import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Tropius",
		fr: "Tropius",
		de: "Tropius"
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
				fr: "Feuille bonus",
				de: "Extrablatt"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon that has any Grass Energy attached to it.",
				fr: "Retirez 3 marqueurs de dégât à chacun de vos Pokémon de Banc possédant une Énergie Grass.",
				de: "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank, an dem mindestens 1 -Energie angelegt ist."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
