import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/6.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "ドラゴンレイジ",
			},
			damage: 50,
		},
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: {
				ja: "バブルビーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],

	related: [
		{
			type: "translation",
			card: InternationCard
		}
	]
};

export default card
