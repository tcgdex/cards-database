import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Entangling Control",
				fr: "Contrôle Emmêlant",
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with his or her Active Pokémon. The new Active Pokémon is now Confused.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Trash Tentacle",
				fr: "Tentacule Déchet",
			},
			effect: {
				en: "Put a card from your discard pile into your hand.",
				fr: "Ajoutez une carte de votre pile de défausse à votre main.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
