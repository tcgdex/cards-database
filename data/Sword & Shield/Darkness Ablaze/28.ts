import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Darmanitan",
		fr: "Darumacho de Galar"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar"
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d’Boule"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Frozen Heat",
				fr: "Chaleur Gelée"
			},
			effect: {
				en: "You may discard all Water Energy from this Pokémon. If you do, this attack does 60 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie Water attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires."
			},
			damage: "110+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
