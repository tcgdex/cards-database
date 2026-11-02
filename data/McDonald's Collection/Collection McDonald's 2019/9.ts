import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Salamèche",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "tetsuya koizumi",

	set: Set,
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	stage: "Basic",
	retreat: 2,

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				fr: "Crocs Feu"
			},
			damage: 20,
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479714,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581852,
			}
		}
	]
}

export default card

