import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Magmar",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Yumi",

	set: Set,
	dexId: [126],
	hp: 80,
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
			cost: ["Fire"],
			name: {
				fr: "Feu Contrôlé"
			},
			effect: {
				fr: "Défaussez la carte du dessus du deck de votre adversaire."
			}
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				fr: "Lance-Flammes"
			},
			damage: 80,
			effect: {
				fr: "Défaussez une Énergie de ce Pokémon."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479719,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581853,
			}
		}
	]
}

export default card

