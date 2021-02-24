import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hail",
				fr: "Grêle",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Vilify",
				fr: "Calomnie",
			},
			effect: {
				en: "Discard as many Pokémon as you like from your hand. This attack does 30 damage times the number of Pokémon you discarded.",
				fr: "Défaussez autant de Pokémon que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de Pokémon que vous avez défaussés.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
