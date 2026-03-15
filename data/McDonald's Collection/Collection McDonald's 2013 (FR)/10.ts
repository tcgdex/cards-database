import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Pikachu",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [25],
	hp: 60,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Groz'Yeux",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				fr: "Électacle",
			},
			effect: {
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],

	retreat: 1,
}

export default card

