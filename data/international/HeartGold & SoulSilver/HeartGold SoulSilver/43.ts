import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'de-de': "Skaraborn"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [214],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Green Draw",
				'fr-fr': "Pioche verte",
				'de-de': "Grüner Zug"
			},
			effect: {
				'en-us': "Draw a card for each of your Grass Pokémon in play.",
				'fr-fr': "Piochez une carte pour chacun de vos Pokémon Grass en jeu.",
				'de-de': "Ziehe eine Karte für jedes deiner -Pokémon im Spiel."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Headbutt",
				'fr-fr': "Double coup d’boule",
				'de-de': "Doppelte Kopfnuss"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This powerful Pokémon thrusts its prized horn under its enemies’ bellies, then lifts and throws them."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86065,
				cardmarket: 279015
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86065,
				cardmarket: 279015
			}
		},
	],

}

export default card
