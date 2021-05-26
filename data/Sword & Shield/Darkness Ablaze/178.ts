import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Houndoom V",
		fr: "Démolosse V"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 210,
	types: [
		"Fire",
	],




	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Searing Flame",
				fr: "Flammes Calcinantes"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Vengeful Flame",
				fr: "Flamme Vengeresse"
			},
			effect: {
				en: "If your Benched Fire Pokémon have any damage counters on them, this attack does 100 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon Fire de Banc, cette attaque inflige 100 dégâts supplémentaires."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
