import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Psykokwak",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Shibuzoh.",

	set: Set,
	dexId: [54],
	hp: 70,
	types: ["Water"],

	stage: "Basic",
	retreat: 2,

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'fr-fr': "Vague de Confusion"
			},
			effect: {
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Confus."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362781,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362781,
			}
		}
	]
}

export default card

