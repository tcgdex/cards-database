import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Barrier",
				fr: "Barrière métallique",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Arceus by Pokémon LV.X during your opponent's next turn.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Arceus par des Pokémon NIV.X lors du prochain tour de votre adversaire.",
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
	retreat: 2,



}

export default card
