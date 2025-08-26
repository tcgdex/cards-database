import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Omastar",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [139],
	hp: 70,
	types: ["Water"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "20ダメージに加えて、Omastarに付着した各水エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},

		},
		{
			cost: ["Water", "Water"],
			name: {
				ja: "スパイクキャノン",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},

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
