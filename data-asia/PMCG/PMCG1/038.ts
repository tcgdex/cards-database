import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [26],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、ライチーに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			name: {
				ja: "雷",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、ライチュはそれ自体に30のダメージを与えます。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};
