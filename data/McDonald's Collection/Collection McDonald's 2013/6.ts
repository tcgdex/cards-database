import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2013"

const card: Card = {
	name: {
		fr: "Voltali",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [135],
	hp: 90,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Pistolectrique",
			},
			effect: {
				fr: "Vous pouvez défausser une Énergie foudre attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "20+",
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				fr: "Crocs Éclair",
			},
			effect: {
				fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "40x",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],

	retreat: 0,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 361726,
			}
		}
	]
}

export default card

