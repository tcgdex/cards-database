import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴナイト-094/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "追い風",
			},
			effect: {
				ja: "ターン中に<em>（攻撃の前）</me> </me>、ドラゴナイトがベンチにある場合、アクティブなポケモンリトリートコストを0に削減できます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Water", "Fighting"],
			name: {
				ja: "ドラゴンテール",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
