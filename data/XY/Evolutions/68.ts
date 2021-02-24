import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		83,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leek Slap",
				fr: "Coup d’oignon",
			},
			effect: {
				en: "This Pokémon can't use Leek Slap during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Coup d’Oignon pendant votre prochain tour.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pot Smash",
				fr: "Coup de Casserole",
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
