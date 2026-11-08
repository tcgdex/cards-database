import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Corsola",
		'fr-fr': "Corayon",
		'de-de': "Corasonn"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Erholung"
			},
			effect: {
				'en-us': "Discard 1 Energy attached to Corsola or this attack does nothing. Remove all damage counters from Corsola.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Corayon pour pouvoir utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Corayon.",
				'de-de': "Lege 1 an Corasonn angelegte -Energiekarte auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkungen. Entferne alle Schadensmarken von Corasonn."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],

			name: {
				'en-us': "Spike Cannon",
				'fr-fr': "Picanon",
				'de-de': "Dornkanone"
			},

			effect: {
				'en-us': "Flip 2 coins. This attack does 30 times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},

			damage: "30x"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It continuously sheds and grows. The tip of its head is prized as a treasure because of its beauty.",
		'fr-fr': "Il ne cesse de grandir et de changer de peau. La pointe de sa tête est très recherchée à cause de sa beauté."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274548,
				tcgplayer: 84437
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274548,
				tcgplayer: 84437
			}
		}
	]
}

export default card

