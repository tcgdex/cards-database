import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'de-de': "Miltank"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Healing Milk",
				'fr-fr': "Lait guérisseur",
				'de-de': "Heilende Milch"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, remove 3 damage counters from 1 of your Pokémon.",
				'fr-fr': "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 3 marqueurs de dégât.",
				'de-de': "Wirf 2 Münzen. Entferne jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, 3 Schadensmarken von 1 deiner Pokémon"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulage continue",
				'de-de': "Dauerrollen"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said that kids who drink MILTANK's milk grow up to become hearty, healthy adults.",
	},

	thirdParty: {
		cardmarket: 277808,
		tcgplayer: 87464
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
