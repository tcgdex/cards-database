import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'de-de': "Larvitar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [246],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mountain Eater",
				'fr-fr': "Croque-montagne",
				'de-de': "Bergfresser"
			},
			effect: {
				'en-us': "Your opponent discards the top card from his or her deck. Then you remove a damage counter from Larvitar.",
				'fr-fr': "Votre adversaire se défausse de la carte du dessus de son deck. Retirez ensuite un marqueur de dégâts de Embrylex.",
				'de-de': "Dein Gegner legt die oberste Karte seines Decks auf seinen Ablagestapel. Dann entfernst du eine Schadensmarke von Larvitar."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte secrète",
				'de-de': "Aufwärtsstoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86634,
				cardmarket: 275163
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86634,
				cardmarket: 275163
			}
		},
	]
}

export default card
