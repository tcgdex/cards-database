import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Trance",
				fr: "Transe Obscure",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness attachée à 1 de vos Pokémon vers un autre de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dragonblast",
				fr: "Dracoxplosion",
			},
			effect: {
				en: "Discard 2 Darkness Energy attached to this Pokémon.",
				fr: "Défaussez 2 Énergies Darkness attachées à ce Pokémon.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
