import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Pidgeot",
		'fr-fr': "Roucarnage",
		'de-de': "Tauboss"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [18],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headwind",
				'fr-fr': "Vent contraire",
				'de-de': "Gegenwind"
			},
			effect: {
				'en-us': "During your opponent's next turn, the attack cost of each of the Defending Pokémon's attacks is ColorlessColorless more.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le coût de chaque attaque du Pokémon Défenseur est augmenté de ColorlessColorless.",
				'de-de': "Während des nächsten Zuges deines Gegners kosten die Angriffe des Verteidigenden Pokémon  mehr."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It spreads its beautiful wings wide to frighten its enemies. It can fly at Mach 2 speed."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88034,
				cardmarket: 279559
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279559,
				tcgplayer: 88034
			}
		},
	],

}

export default card
