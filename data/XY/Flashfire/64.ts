import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Floette",
		fr: "Floette",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		670,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Veil",
				fr: "Flora-Voile",
			},
			effect: {
				en: "Each of your Grass Pokémon in play gets +20 HP.",
				fr: "Ajoute 20 PV à chacun de vos Pokémon Grass en jeu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
