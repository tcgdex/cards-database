import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Chartor",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "sui",

	set: Set,
	dexId: [324],
	hp: 110,
	types: ["Fire"],

	stage: "Basic",
	retreat: 3,

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'fr-fr': "Roussi"
			},
			effect: {
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
			}
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				'fr-fr': "Plaquage"
			},
			damage: 50,
			effect: {
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362777,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362777,
			}
		}
	]
}

export default card

