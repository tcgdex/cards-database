import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Golduck BREAK",
		fr: "Akwakwak TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		55,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Golduck",
		fr: "Akwakwak",
	},
	stage: "BREAK",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hyper Transfer",
				fr: "Hyper Transfert",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
			},
		},
	],
	attacks: [
		{

			name: {
				fr: "Règle des Évolutions TURBO",
			},


		},
	],






}

export default card
