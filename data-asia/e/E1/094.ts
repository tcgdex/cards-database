import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴナイト",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "追い風",
			},
			effect: {
				ja: "ターン中（攻撃前）に（攻撃の前）、ドラゴナイトがベンチにある場合、アクティブなPokmonのリトリートコストを0に減らすことができます。",
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
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
