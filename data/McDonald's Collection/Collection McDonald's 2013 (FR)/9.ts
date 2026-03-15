import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Nymphali",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [700],
	hp: 90,
	types: ["Fairy"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Fairy"],
			name: {
				fr: "Regard Touchant",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,
		},
		{
			cost: ["Fairy", "Colorless", "Colorless"],
			name: {
				fr: "Vent Féérique",
			},
			effect: {
				fr: "Déplacez une Énergie du Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,
}

export default card

