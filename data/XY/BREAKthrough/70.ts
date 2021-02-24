import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "My Way",
				fr: "Ma Façon",
			},
			effect: {
				en: "If there is any Stadium card in play, this Pokémon has no Retreat Cost.",
				fr: "S'il y a une carte Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
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
				en: "Moonlight Gain",
				fr: "Soin au Clair de Lune",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 70,

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
