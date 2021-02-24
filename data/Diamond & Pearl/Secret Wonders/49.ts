import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		83,
	],
	hp: 60,
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
				en: "Swords Dance",
				fr: "Danse-lames",
			},
			effect: {
				en: "During your next turn, Farfetch'd's Leek Slap attack's base damage is 60.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Coup d'oignon de Canarticho sont de 60.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leek Slap",
				fr: "Coup d'oignon",
			},
			effect: {
				en: "During your next turn, Farfetch'd can't use Leek Slap.",
				fr: "Lors de votre prochain tour, Canarticho ne peut pas utiliser Coup d'poireau.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
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
