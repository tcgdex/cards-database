import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Ho-oh",
		'fr-fr': "Ho-oh",
		'de-de': "Ho-oh"
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
				'en-us': "Stoke",
				'fr-fr': "Crémation",
				'de-de': "Anheizen"
			},
			effect: {
				'en-us': "You may search your deck for a Energy card and attach it to Ho-oh",
				'fr-fr': "Vous pouvez chercher une carte Énergie  et l'attacher à Ho-oh. Mélangez ensuite votre deck.",
				'de-de': "Du kannst dein Deck nach einer -Energiekarte durchsuchen und sie an Ho-oh anlegen. Mische danach dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Sacred Fire",
				'fr-fr': "Feu sacré",
				'de-de': "Läuterfeuer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. N'appliquez pas la Faiblesse et la Résistance.",
				'de-de': "Wirf eine Münze. Wähle bei 'Kopf' ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 40 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
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
				'en-us': "Dive Bomb",
				'fr-fr': "Bombardement",
				'de-de': "Sturzflugbombe"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' hat dieser Angriff keine Auswirkungen."
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
	retreat: 2,


	description: {
		'en-us': "Legends claim this Pokémon flies the world's skies continuously on its magnificent seven colored wings.",
		'fr-fr': "Selon la légende, ce Pokémon traverse constamment le ciel, porté par ses magnifiques ailes aux couleurs de l'arc-en-ciel."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274593,
				tcgplayer: 86118
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274593,
				tcgplayer: 86118
			}
		}
	]
}

export default card
