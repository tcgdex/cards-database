import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013 (FR)"

const card: Card = {
	name: {
		fr: "Évoli",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Mimi-Queue",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				fr: "Morsure",
			},
			damage: 10,
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

