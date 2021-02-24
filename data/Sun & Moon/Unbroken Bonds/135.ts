import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
	},
	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		40,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Jigglypuff",
		fr: "Rondoudou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Orb Polish",
				fr: "Orbe Lustré",
			},
			effect: {
				en: "Put 3 Energy cards from your discard pile into your hand.",
				fr: "Ajoutez 3 cartes Énergie de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy Ball",
				fr: "Boule Dodo",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 80,

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
