import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mirror Step",
				fr: "Pas Dupliqué",
			},
			effect: {
				en: "If 1 of your opponent's Pokémon in play has the same name as 1 of your Pokémon in play, this attack does 70 more damage.",
				fr: "Si l’un des Pokémon en jeu de votre adversaire a le même nom que l’un de vos Pokémon en jeu, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 10,

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
