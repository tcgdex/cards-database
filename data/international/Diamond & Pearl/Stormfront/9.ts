import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'de-de': "Regigigas"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'fr-fr': "Regigigas",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Regi Form",
				'fr-fr': "Regi forme",
				'de-de': "Regi-Form"
			},
			effect: {
				'en-us': "If you have Regirock, Regice, and Registeel in play, the attack cost of Regigigas's attacks is Colorless less.",
				'fr-fr': "Si vous avez Regirock, Regice et Registeel en jeu, le Coût d'attaque des attaques de Regigigas est Colorless de moins.",
				'de-de': "Wenn du Regirock, Regice und Registeel im Spiel hast, kosten Regigigas' Angriffe 1  weniger."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Punch",
				'fr-fr': "Ultimapoing",
				'de-de': "Megahieb"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Giga Power",
				'fr-fr': "Giga pouvoir",
				'de-de': "Gigakraft"
			},
			effect: {
				'en-us': "You may do 60 damage plus 40 more damage. If you do, Regigigas does 40 damage to itself.",
				'fr-fr': "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires. Regigigas s'inflige alors 40 dégâts.",
				'de-de': "Du kannst mit diesem Angriff 60 Schadenspunkte plus 40 weitere Schadenspunkte zufügen. Wenn du das machst, fügt Regigigas sich selbst 40 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278307,
		tcgplayer: 88663
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
