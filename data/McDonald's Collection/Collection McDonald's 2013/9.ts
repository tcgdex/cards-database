import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Noctali",
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [197],
	hp: 100,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Onde Folie",
			},
			effect: {
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless"],
			name: {
				fr: "Dépouillage des Ombres",
			},
			effect: {
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez toutes les Énergies attachées au Pokémon Défenseur.",
			},
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361729,
			}
		}
	]
}

export default card
