import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [190],

	hp: 50,

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
				'en-us': "Stretch Tail",
				'fr-fr': "Tire-queue",
				'de-de': "Gestreckter Schweif"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire ; cette attaque lui inflige 10 dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Wirf eine Münze. Wähle bei \"Kopf\" 1 der Pokémon auf der Bank deines Gegners, und dieser Angriff fügt ihm 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Skedaddle",
				'fr-fr': "Décampe",
				'de-de': "Türmen"
			},
			effect: {
				'en-us': "Return Aipom and all basic Energy cards attached to it to your hand. If you have no Benched Pokémon, this attack does nothing.",
				'fr-fr': "Renvoyez Capumain et toutes les cartes Énergie de base qui y sont attachées dans votre main. (Si vous n'avez pas de Pokémon sur le Banc, cette attaque ne fait rien.)",
				'de-de': "Bringe Griffel und alle daran angelegten Basis-Energiekarten auf deine Hand zurück. Hast du keine Pokémon auf deiner Bank, hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83487,
				cardmarket: 275140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83487,
				cardmarket: 275140
			}
		},
	]
}

export default card
