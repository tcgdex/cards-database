import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "アイビサウルス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [2],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "つる鞭",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "相手のアクティブなポケモンは毒されています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/30.ts"
		}
	]
};

export default card
