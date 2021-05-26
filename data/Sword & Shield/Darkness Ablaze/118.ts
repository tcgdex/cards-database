import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Scizor V",
		fr: "Cizayox V"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Metal",
	],




	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Hack Off",
				fr: "Sectionnement"
			},
			effect: {
				en: "Discard a Pokémon Tool and a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez un Outil Pokémon et une Énergie spéciale du Pokémon Actif de votre adversaire."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
				fr: "Griffe Taillante"
			},

			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
