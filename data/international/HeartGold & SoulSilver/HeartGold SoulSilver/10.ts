import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "match",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Iron Tail",
				'fr-fr': "Queue de fer",
				'de-de': "Eisenschweif"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre",
				'de-de': "Donnerblitz"
			},
			effect: {
				'en-us': "Discard all Energy attached to Raichu.",
				'fr-fr': "Défaussez-vous de toutes les cartes Énergie attachées à Raichu.",
				'de-de': "Lege alle Energien, die an Raichu angelegt sind, auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "If the electric pouches in its cheeks become fully charged, both ears will stand straight up."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88517,
				cardmarket: 278982
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88517,
				cardmarket: 278982
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				tcgplayer: 213011,
				cardmarket: 278982
			}
		},
	],

}

export default card
