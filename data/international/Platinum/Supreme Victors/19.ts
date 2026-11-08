import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Camerupt G",
		'fr-fr': "Camerupt ",
		'de-de': "Camerupt G"
	},
	illustrator: "Ryota Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [323],
	hp: 100,
	types: [
		"Fire"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes calcinantes",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Earth Power",
				'fr-fr': "Telluriforce",
				'de-de': "Erdkräfte"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte mal der Anzahl \"Kopf\" zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278710,
				tcgplayer: 84097
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278710,
				tcgplayer: 84097
			}
		},
	],

}

export default card
