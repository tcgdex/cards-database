import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		348,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rushing Water",
				fr: "Courant Fort",
			},
			effect: {
				en: "Move an Energy from your opponent’s Active Pokémon to 1 of his or her Benched Pokémon.",
				fr: "Déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de Garde",
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
