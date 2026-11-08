import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		'fr-fr': "Pikachu",
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'fr-fr': "Éclair",
			},
			effect: {
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'fr-fr': "Queue Battoir",
			},
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361725,
			}
		}
	]
}

export default card
