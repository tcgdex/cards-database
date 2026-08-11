import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Nounourson",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Sekio",

	set: Set,
	dexId: [759],
	hp: 70,
	types: ["Colorless"],

	stage: "Basic",
	retreat: 2,

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'fr-fr': "Regard Touchant"
			},
			effect: {
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
			}
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'fr-fr': "Charge"
			},
			damage: 20
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362811,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362811,
			}
		}
	]
}

export default card

