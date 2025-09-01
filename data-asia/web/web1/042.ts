import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いカリザード",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 80,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ネイルフリック",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "連続した火の玉",
			},
			effect: {
				ja: "ダークチャリザードに取り付けられた消防エネルギーカードの数に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の50回のダメージ時間を実行します。頭の数に等しい暗いリザードに取り付けられた多くの火エネルギーカードを廃棄します。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
