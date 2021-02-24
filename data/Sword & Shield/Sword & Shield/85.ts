import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Life Shaker",
				fr: "Chamboule Vie",
			},
			effect: {
				en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon Psychic vers un autre de vos Pokémon Psychic.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 90,

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
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
