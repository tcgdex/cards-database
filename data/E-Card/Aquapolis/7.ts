import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		de: "Donphan"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [232],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				de: "Erdbeben"
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de votre propre Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Fügt jedem Pokémon auf deiner eigenen Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
				de: "Doppelstich"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque fait 40 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84870,
				cardmarket: 275079
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84870,
				cardmarket: 275079
			}
		},
	]
}

export default card
