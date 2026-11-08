import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'de-de': "Pinsir"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [127],

	hp: 90,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gripthrow",
				'fr-fr': "Lance-grippe",
				'de-de': "Wurfgriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" nimmt dein Gegner das Verteidigende Pokémon und alle Karten, die an es angelegt sind, auf seine Hand zurück."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sever",
				'fr-fr': "Couper",
				'de-de': "Abtrennen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Phase 2 Pokémon ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "It grips prey with its pincers until the prey is torn in half. What it can't tear, it tosses far."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88138,
				cardmarket: 278766
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278766,
				tcgplayer: 88138
			}
		},
	],

}

export default card
