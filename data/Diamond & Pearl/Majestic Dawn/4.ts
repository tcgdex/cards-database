import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Time Shift",
				fr: "Orbe Adamant",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Si un Pokémon Actif possède une Faiblesse au type Metal, les attaques de Dialga infligent 20 dégâts supplémentaires à ce Pokémon (avant application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Diamond Blast",
				fr: "Modification temporelle",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 20 more damage.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Explosion diamant",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
