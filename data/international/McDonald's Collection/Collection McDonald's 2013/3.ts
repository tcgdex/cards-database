import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		'fr-fr': "Aquali",
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [134],
	hp: 100,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'fr-fr': "Ocroupi",
			},
			effect: {
				'fr-fr': "Inflige 20 dégats à I des Pokémon de Banc_de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'fr-fr': "Spirale Epuisante",
			},
			effect: {
				'fr-fr': "Soignez 20 dégâts à ce Pokémon",
			},
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361723,
			}
		}
	]
}

export default card
