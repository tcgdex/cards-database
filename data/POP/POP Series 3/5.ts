import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		de: "Plusle"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [311],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
				fr: "Courage !",
				de: "Aufmuntern"
			},
			effect: {
				en: "Draw a card. If you have Minun in play, draw 2 cards instead.",
				fr: "Piochez une carte. Si vous avez Négapi en jeu, piochez 2 cartes à la place.",
				de: "Ziehe 1 Karte. Wenn du Minun im Spiel hast, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Positive Ion",
				fr: "Ion positif",
				de: "Positives Ion"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Body Bolt",
				fr: "« Boulon corporel »",
				de: "Bodybolzen"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any Poké-Bodies. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire qui a un Poké-Body. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners aus, das einen Poké-Body besitzt. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88167,
				cardmarket: 277453
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88167,
				cardmarket: 277453
			},
		},
	],

}

export default card
