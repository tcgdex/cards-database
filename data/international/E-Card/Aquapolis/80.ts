import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'de-de': "Fukano"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roar",
				'fr-fr': "Hurlement",
				'de-de': "Gebrüll"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it.",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur.",
				'de-de': "Wenn dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er 1 davon und tauscht es mit dem Verteidigenden Pokémon aus."
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Firebreathing",
				'fr-fr': "Souffle-feu",
				'de-de': "Feuerhauch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
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
				tcgplayer: 85953,
				cardmarket: 275124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85953,
				cardmarket: 275124
			}
		},
	]
}

export default card
