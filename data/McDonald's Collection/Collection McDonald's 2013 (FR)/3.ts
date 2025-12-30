import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Voltali",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [135],
	hp: 80,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				fr: "Coup d'Jus",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				fr: "Crocs Éclair",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "30+",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],

	retreat: 0,
}

export default card

