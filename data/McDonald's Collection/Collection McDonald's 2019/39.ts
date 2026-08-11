import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Kangourex",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Naoyo Kimura",

	set: Set,
	dexId: [115],
	hp: 120,
	types: ["Colorless"],

	stage: "Basic",
	retreat: 2,

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Rapporte"
			},
			effect: {
				fr: "Piochez une carte."
			}
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				fr: "Coup d'Boule"
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				fr: "En Deux Punch"
			},
			damage: "60+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479869,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581893,
			}
		}
	]
}

export default card

