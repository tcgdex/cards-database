import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'de-de': "Sandamer"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [28],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "If it digs at an incredible pace, it may snap off its spike and claws. They grow back in a day."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88934,
				cardmarket: 279001
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88934,
				cardmarket: 279001
			}
		},
	],

}

export default card
