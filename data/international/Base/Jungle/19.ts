import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'de-de': "Flamara"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu; bei \"Zahl\" fügt dieser Angriff 10 Schaden zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flammes",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Flareon in order to use this attack.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Pyroli pour pouvoir utiliser cette attaque.",
				'de-de': "Entferne eine auf Flamara abgelegte -Energiekarte, um diesen Angriff auszuführen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
		'fr-fr': "Il peut accumuler suffisamment de chaleur pour atteindre des températures de 1600 degrés."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273800,
				tcgplayer: 106981
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273800,
				tcgplayer: 106981
			}
		}
	],
}

export default card
