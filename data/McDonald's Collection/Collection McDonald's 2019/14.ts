import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Ramoloss",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Tomokazu Komiya",

	set: Set,
	dexId: [79],
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
				fr: "Bâillement"
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479739,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581857,
			}
		}
	]
}

export default card

