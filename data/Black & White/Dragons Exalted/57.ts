import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		576,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Doom Decree",
				fr: "Verdict Fatal",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est mis K.O.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Magic",
				fr: "Magie Noire",
			},
			effect: {
				en: "Does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 40,

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
