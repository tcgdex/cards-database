import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ho-oh",
		fr: "Ho-oh",
		de: "Ho-oh"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Stoke",
				fr: "Crémation",
				de: "Anheizen"
			},
			effect: {
				en: "You may search your deck for a Energy card and attach it to Ho-oh",
				fr: "Vous pouvez chercher une carte Énergie  et l'attacher à Ho-oh. Mélangez ensuite votre deck.",
				de: "Du kannst dein Deck nach einer -Energiekarte durchsuchen und sie an Ho-oh anlegen. Mische danach dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Sacred Fire",
				fr: "Feu sacré",
				de: "Läuterfeuer"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance.",
				de: "Wirf eine Münze. Wähle bei 'Kopf' ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 40 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],

			name: {
				en: "Dive Bomb",
				fr: "Bombardement",
				de: "Sturzflugbombe"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 90
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Selon la légende, ce Pokémon traverse constamment le ciel, porté par ses magnifiques ailes aux couleurs de l'arc-en-ciel."
	},

	thirdParty: {
		tcgplayer: 86118
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
