import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		266,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Ascension",
				fr: "Ascension",
			},
			effect: {
				en: "Search your deck for a card that evolves from Silcoon and put it onto Silcoon. (This counts as evolving Silcoon.) Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte qui évolue d'Armulys et placez-la sur Armulys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sticky String",
				fr: "Ficelle collante",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
