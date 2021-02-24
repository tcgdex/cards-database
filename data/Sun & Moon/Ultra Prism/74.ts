import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},
	illustrator: "Misa Tsutsui",
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
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Evil Admonition",
				fr: "Réprimande Maléfique",
			},
			effect: {
				en: "This attack does 50 damage for each of your opponent's Pokémon that has an Ability.",
				fr: "Cette attaque inflige 50 dégâts pour chaque Pokémon de votre adversaire ayant un talent.",
			},
			damage: 50,

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
