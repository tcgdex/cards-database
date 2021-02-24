import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Net",
				fr: "Filet de Bulles",
			},
			effect: {
				en: "Energy can't be attached to the Defending Pokémon from your opponent's hand during their next turn.",
				fr: "Aucune Énergie ne peut être attachée au Pokémon Défenseur de la main de votre adversaire pendant son prochain tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
			},

			damage: 80,

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
