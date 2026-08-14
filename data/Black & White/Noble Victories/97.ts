import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		de: "Viridium"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		640,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Draw",
				fr: "Double Pioche",
				de: "Zweifachzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Wallop",
				fr: "Rafale de Feuilles",
				de: "Blattprügel"
			},
			effect: {
				en: "During your next turn, this Pokémon's Leaf Wallop attack does 40 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Rafale de Feuilles de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Während deines nächsten Zuges fügt die Attacke Blattprügel dieses Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its head sprouts horns as sharp as blades. Using whirlwind-like movements, it confounds and swiftly cuts opponents.",
		de: "Das Horn an seinem Kopf ist eine scharfe Klinge. Neckt seine Gegner mit quirligen Bewegungen und greift blitzartig an."
	},

	thirdParty: {
		cardmarket: 280220,
		tcgplayer: 90392
	}
}

export default card
