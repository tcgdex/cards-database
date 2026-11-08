import { Card } from "models/database/card"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カイリュー",
	},

	illustrator: "Kagemaru Himeno",
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
				'ja-jp': "ステップインします",
			},
			effect: {
				'ja-jp': "ターン中に<em>（攻撃の前）</me>、ドラゴナイトがベンチにある場合、アクティブなポケモンに切り替えることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラム",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575682
			},
		},
	],
};

export default card
