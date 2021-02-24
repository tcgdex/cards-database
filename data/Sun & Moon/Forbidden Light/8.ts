import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Vivillon",
		fr: "Prismillon",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		666,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spewpa",
		fr: "Pérégrain",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vivid Powder",
				fr: "Poudre Vive",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
