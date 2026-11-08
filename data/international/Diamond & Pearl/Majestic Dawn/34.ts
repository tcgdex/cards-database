import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
		'de-de': "Aquana"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cleanse Away",
				'fr-fr': "Grand nettoyage",
				'de-de': "Wunden lecken"
			},
			effect: {
				'en-us': "Remove 2 damage counters from each of your Benched Pokémon.",
				'fr-fr': "Retirez 2 marqueurs de dégât à chacun de vos Pokémon de Banc.",
				'de-de': "Entferne 2 Schadensmarken von jedem Pokémon auf deiner Bank."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Whirlpool",
				'fr-fr': "Hyper tourbillon",
				'de-de': "Hyper Whirlpool"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Lege pro \"Kopf\" eine an das Verteidigende Pokémon angelegte Energiekarte auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has evolved to be suitable for aquatic life. It can invisibly melt away into water.",
	},

	thirdParty: {
		cardmarket: 278083,
		tcgplayer: 90284
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
