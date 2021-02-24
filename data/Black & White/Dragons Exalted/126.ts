import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Reuniclus",
		fr: "Symbios",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		579,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duosion",
		fr: "Méios",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Damage Swap",
				fr: "Échange de Dégâts",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts de l'un de vos Pokémon vers un autre de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psywave",
				fr: "Vague Psy",
			},
			effect: {
				en: "Does 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
