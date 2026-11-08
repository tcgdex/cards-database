import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'de-de': "Kapoera"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Triple Kick",
				'fr-fr': "Triple pied",
				'de-de': "Dreifachkick"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gut Spin",
				'fr-fr': "Tour de tripes",
				'de-de': "Magendreher"
			},
			effect: {
				'en-us': "If Tyrogue is anywhere under Hitmontop, you may switch Hitmontop with 1 of your Benched Pokémon.",
				'fr-fr': "Si Debugant se trouve sous Kapoera, vous pouvez échanger Kapoera avec 1 des Pokémon de votre Banc.",
				'de-de': "Wenn Rabauz sich an beliebiger Stelle unter Kapoera befindet, kannst du Kapoera gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It fights while spinning like a top. The centrifugal force boosts its destructive power by ten.",
		'fr-fr': "Il combat en tournoyant comme une toupie. La force centrifuge décuple sa puissance destructrice."
	},

	thirdParty: {
		cardmarket: 278250,
		tcgplayer: 86116
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
