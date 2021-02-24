import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		402,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
			},
			effect: {
				en: "During your next turn, any damage done to the Defending Pokémon by attacks is increased by 60 (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, tous les dégâts infligés au Pokémon Défenseur par des attaques sont augmentés de 60 (après application de la Faiblesse et de la Résistance).",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
