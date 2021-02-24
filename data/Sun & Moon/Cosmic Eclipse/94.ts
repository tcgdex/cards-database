import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		709,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Perplexing Forest",
				fr: "Forêt Déroutante",
			},
			effect: {
				en: "You may have your opponent switch their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Impact",
				fr: "Impact Lugubre",
			},
			effect: {
				en: "Put 4 damage counters on 1 of your Pokémon.",
				fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
			},
			damage: 120,

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
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
