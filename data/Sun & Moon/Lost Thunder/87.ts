import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		177,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost March",
				fr: "Marche Perdue",
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon  (Prisme Étoile).",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
