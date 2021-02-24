import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hair Wall",
				fr: "Mur Capillaire",
			},
			effect: {
				en: "Your Metal Pokémon take 10 less damage from your opponent's attacks (after applying Weakness and Resistance).",
				fr: "Vos Pokémon Metal subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
