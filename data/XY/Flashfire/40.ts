import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		477,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Void",
				fr: "Crevasse d’Ombre",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to this Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon vers ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pain Pellets",
				fr: "Points de Douleur",
			},
			effect: {
				en: "Put damage counters on 1 of your opponent’s Pokémon equal to the number of damage counters on this Pokémon.",
				fr: "Placez autant de marqueurs de dégâts sur l’un des Pokémon de votre adversaire qu’il y a de marqueurs de dégâts sur ce Pokémon.",
			},

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
