import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross"
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
		en: "Metang",
		fr: "Metang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Reversal",
				fr: "Renversement magnétique",
				de: "Magnetumpolung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Metalosse est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Bei \"Kopf\" tausche 1 Verteidigendes Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Diese Poké-Power kann nicht benutzt werden, wenn Metagross von einem Speziellen Zustand betroffen ist."
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
				en: "Extra Comet Punch",
				fr: "Poing météore",
				de: "Extra Kometenhieb"
			},
			effect: {
				en: "During your next turn, Metagross's Extra Comet Punch attack's base damage is 100.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Poing météore de Metalosse sont de 100.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Metagross' Angriff Extra Kometenhieb 100 Schadenspunkte."
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
		fr: "Il est né de la fusion de plusieurs Métang. Ses quatre cerveaux en font l'égal d'un superordinateur."
	}
}

export default card
