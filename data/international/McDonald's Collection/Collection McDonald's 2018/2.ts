import { Card } from 'models/database/card'
import Set from "../Collection McDonald's 2018"

const card: Card = {
	name: {
		'fr-fr': "Croquine",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Akira Komayama",

	set: Set,
	dexId: [761],
	hp: 60,
	types: ["Grass"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'fr-fr': "Doux Parfum"
			},
			effect: {
				'fr-fr': "Soignez 30 dégâts à l'un de vos Pokémon."
			}
		},
		{
			cost: ["Colorless"],
			name: {
				'fr-fr': "Trempette"
			},
			damage: 10
		}
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 362773,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 362773,
			}
		}
	]
}

export default card

