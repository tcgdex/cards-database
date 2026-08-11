import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Metalosse",
		'de-de': "Metagross"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Metang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Magnetic Reversal",
				'fr-fr': "Renversement magnétique",
				'de-de': "Magnetumpolung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Metalosse est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Diese Poké-Power kann nicht benutzt werden, wenn Metagross von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Comet Punch",
				'fr-fr': "Poing météore",
				'de-de': "Extra Kometenhieb"
			},
			effect: {
				'en-us': "During your next turn, Metagross's Extra Comet Punch attack's base damage is 100.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Poing météore de Metalosse sont de 100.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden von Metagross' Angriff Extra Kometenhieb 100 Schadenspunkte."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Metang combined to form it. With four brains, it has the intelligence of a supercomputer.",
		'fr-fr': "Il est né de la fusion de plusieurs Métang. Ses quatre cerveaux en font l'égal d'un superordinateur."
	},

	thirdParty: {
		cardmarket: 278159,
		tcgplayer: 87338
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
		}
	]
}

export default card
