import { Card } from '../../../interfaces'
import Set from '../Black & White'

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
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon.",
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
