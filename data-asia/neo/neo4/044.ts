import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いフラフィ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [180],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "高電圧",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中にトレーナーカードをプレイできません。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "スタンウェーブ",
			},
			effect: {
				ja: "防衛ポケモンにポケモンのパワーがある場合、そのパワーは次のターンの終わりまで機能しなくなります。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
