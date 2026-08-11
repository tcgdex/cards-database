import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		'fr-fr': "Magicarpe",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Sekio",

	set: Set,
	dexId: [129],
	hp: 30,
	types: ["Water"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Water"],
			name: {
				'fr-fr': "Éclaboussure"
			},
			damage: "10+",
			effect: {
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479754,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581860,
			}
		}
	]
}

export default card

