import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		421,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sunny Day",
				fr: "Zénith",
			},
			effect: {
				en: "Each of your Grass Pokémon and Fire Pokémon's attacks does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				fr: "Chacune des attaques de vos Pokémon Grass et Fire inflige 10 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Salty-sweet Pollen",
				fr: "Pollen sucré-salé",
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-soleil",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
