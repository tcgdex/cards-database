import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		fr: "Chartor",
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
				fr: "Roussi"
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
			}
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				fr: "Plaquage"
			},
			damage: 50,
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
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

