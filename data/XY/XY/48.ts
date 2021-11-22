import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gastro Acid",
				fr: "Suc Digestif",
			},
			effect: {
				en: "The Defending Pokémon has no Abilities until the end of your next turn.",
				fr: "Le Pokémon Défenseur n'a pas de talent jusqu'à la fin de votre prochain tour.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
