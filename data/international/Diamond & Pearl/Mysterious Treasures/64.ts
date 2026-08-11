import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'de-de': "Tropius"
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
				'en-us': "Bonus Leaf",
				'fr-fr': "Feuille bonus",
				'de-de': "Extrablatt"
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Benched Pokémon that has any Grass Energy attached to it.",
				'fr-fr': "Retirez 3 marqueurs de dégât à chacun de vos Pokémon de Banc possédant une Énergie Grass.",
				'de-de': "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank, an dem mindestens 1 -Energie angelegt ist."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
	retreat: 1,


	description: {
		'en-us': "Because it continually ate only its favorite fruit, the fruit started growing around its neck.",
		'fr-fr': "À force de manger son fruit préféré, il a fini par pousser autour de son cou."
	},

	thirdParty: {
		cardmarket: 277693,
		tcgplayer: 90059
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
