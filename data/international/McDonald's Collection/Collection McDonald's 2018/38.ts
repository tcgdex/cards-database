import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Passerouge",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "You Iribi",

	set: Set,
	dexId: [661],
	hp: 50,
	types: ["Colorless"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'fr-fr': "Rugissement"
			},
			effect: {
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance)."
			}
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'fr-fr': "Battement"
			},
			damage: 20
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362810,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362810,
			}
		}
	]
}

export default card

