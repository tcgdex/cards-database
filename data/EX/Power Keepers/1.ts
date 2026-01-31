import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		de: "Stolloss"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Terraforming",
				fr: "Terraformage",
				de: "Erdumwälzung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 5 cards from your deck and put them back on top of your deck in any order. This power can't be used if Aggron is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck et les replacer au dessus de votre deck dans n'importe quel ordre. Ce pouvoir ne peut pas être utilisé si Galeking est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 5 Karten deines Decks ansehen und sie danach in beliebiger Reihenfolge zurück in dein Deck legen. Diese Poké-Power kann nicht benutzt werden, wenn Stolloss von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe acier",
				de: "Metallklaue"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mix-Up",
				fr: "Mélange",
				de: "Durcheinander"
			},
			effect: {
				en: "Your opponent discards the top card of his or her deck.",
				fr: "Votre adversaire défausse la carte du dessus de son deck.",
				de: "Dein Gegner legt die oberste Karte seines Decks auf den Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 4,

	thirdParty: {
		cardmarket: 277307,
		tcgplayer: 83477
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
