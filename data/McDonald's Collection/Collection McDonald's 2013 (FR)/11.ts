import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Mewtwo",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [150],
	hp: 120,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				fr: "Choc Mental",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				fr: "Ball'Ombre",
			},
			damage: 80,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],

	retreat: 2,
}

export default card

