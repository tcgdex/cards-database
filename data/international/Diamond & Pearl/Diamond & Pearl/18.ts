import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Defense Curl",
				'fr-fr': "Boul'armure",
				'de-de': "Einigler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Azumarill during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous dégâts infligés à Azumarill lors du prochain tour de votre adversaire.",
				'de-de': "Wirf eine Müntze. Bei \"Kopf\" verhindere alle Schaden, der Azumarill während des nächsten Zuges deines Gegners zugefügt wird."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubble Pump",
				'fr-fr': "Pompe à bulles",
				'de-de': "Blubbpumpe"
			},
			effect: {
				'en-us': "If Azumarill has 3 or more Energy attached to it, this attack does 40 damage plus 20 more damage. If Azurill is anywhere under Azumarill, flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Si Azumarill possède au moins 3 Énergies, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires. Si Azurill se trouve sous Azumarill, lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wenn an Azumarill 3 oder mehr Energien angelegt sind, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu. Wenn Azurill sich an beliebiger Stelle unter Azumarill befindet, wirf 1 Müntze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives in rivers and lakes. In water, its coloring and patterns trick the vision of foes.",
	},

	thirdParty: {
		cardmarket: 277517,
		tcgplayer: 83684
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
