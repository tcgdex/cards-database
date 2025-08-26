import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラゴナイト",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 100,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "ステップインします",
			},
			effect: {
				ja: "ターン中に<em>（攻撃の前）</me>、ドラゴナイトがベンチにある場合、アクティブなポケモンに切り替えることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "スラム",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
