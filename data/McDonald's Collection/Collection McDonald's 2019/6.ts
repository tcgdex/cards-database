import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Saquedeneu",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Ken Sugimori",

	set: Set,
	dexId: [114],
	hp: 80,
	types: ["Grass"],

	stage: "Basic",
	retreat: 2,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				fr: "Gifle Douce"
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				fr: "Étreinte"
			},
			damage: 40,
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479699,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581849,
			}
		}
	]
}

export default card

