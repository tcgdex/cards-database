import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		711,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pumpkin Bomb",
				fr: "Bombe Citrouille",
			},
			effect: {
				en: "Before doing damage, you may discard any number of Pokémon Tool cards from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
				fr: "Avant d’infliger des dégâts, vous pouvez défausser autant de cartes Outil Pokémon que vous voulez de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
