import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "デューゴン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "オーロラビーム",
			},
			damage: 50,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "アイスビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
