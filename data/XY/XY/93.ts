import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		683,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fairy Transfer",
				fr: "Transfert Féérique",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Fairy Energy attached to 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Fairy attachée à l'un de vos Pokémon vers un autre de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
