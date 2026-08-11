import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Staraptor FB",
		'fr-fr': "Etouraptor ",
		'de-de': "Staraptor FB"
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Holo Rare",
	category: "Pokemon",

	set: Set,
	dexId: [398],
	hp: 80,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278702,
				tcgplayer: 89511
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278702,
				tcgplayer: 89511
			}
		},
	],

}

export default card
