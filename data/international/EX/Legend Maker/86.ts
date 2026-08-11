import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Dustox ex",
		'fr-fr': "Papinox ex",
		'de-de': "Pudox ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		269,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune Protectrice",
				'de-de': "Bodyguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Dustox ex by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Papinox ex par le Pokémon-ex de votre adversaire.",
				'de-de': "Verhindere alle Effekte von Angriffen inklusive Schaden, die Pudox ex von gegnerischen Pokémon-ex zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Silver Wind",
				'fr-fr': "Vent argenté",
				'de-de': "Silberhauch"
			},
			effect: {
				'en-us': "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage.",
				'fr-fr': "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 30 dégâts supplémentaires.",
				'de-de': "Während deines nächsten Zuges, wenn ein Angriff dem Verteidigenden Pokémon Schaden zufügt (nachdem Schwäche und Resistenz verrechnet wurden), fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 40,
		},
		{
			cost: [ 'Grass', 'Colorless', 'Colorless' ],
			name: {
				'fr-fr': 'Vent glacial',
				'de-de': "Schneidender Wind"
			},
			damage: 70
		}
	],

	
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,

	thirdParty: {
		cardmarket: 276963,
		tcgplayer: 85060
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
