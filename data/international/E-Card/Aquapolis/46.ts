import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [85],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Peck Attack",
				'fr-fr': "Prise de bec",
				'de-de': "Schnabelangriff"
			},
			effect: {
				'en-us': "Flip 2 coins. If 1 of them is heads, this attack does 20 damage. If both are heads, this attack does 50 damage. If both are tails, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez 2 pièces. S'il vous obtenez une face, cette attaque inflige 20 dégâts. Si vous obtenez 2 faces, cette attaque inflige 50 dégâts. Si c'est pile dans les deux cas, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 2 Münzen. Wenn 1 von beiden 'Kopf' zeigt, fügt dieser Angriff 20 Schadenspunkte zu. Wenn beide Münzen 'Kopf' zeigen, fügt dieser Angriff 50 Schadenspunkte zu. Wenn beide 'Zahl' zeigen, ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84848,
				cardmarket: 275118
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84848,
				cardmarket: 275118
			}
		},
	]
}

export default card
