import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		de: "Raichu"
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
		en: "Pikachu",
		fr: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Iron Tail",
				fr: "Queue de fer",
				de: "Eisenschweif"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce jusqu’à ce qu’elle tombe sur pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy attached to Raichu.",
				fr: "Défaussez-vous de toutes les cartes Énergie attachées à Raichu.",
				de: "Lege alle Energien, die an Raichu angelegt sind, auf deinen Ablagestapel."
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
		en: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up."
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
