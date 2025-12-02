import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Mentali",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [196],
	hp: 90,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				fr: "Psykoud'Boul",
			},
			damage: 20,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				fr: "Rayon Psy",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],

	retreat: 1,
}

export default card

