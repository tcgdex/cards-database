import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Roggenrola",
		fr: "Nodulithe",
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		524,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Smack Down",
				fr: "Anti-Air",
			},
			effect: {
				en: "If your opponent's Active Pokémon has Fighting Resistance, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
