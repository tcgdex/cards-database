import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マタドガス",
		'zh-tw': "雙彈瓦斯",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'ja-jp': "ごくまれに 突然変異で 双子の 小さい ドガースが 連結したまま 出ることがある。",
		'zh-tw': "有時會因為非常罕見的突變，出現２個連在一起的雙胞胎小瓦斯彈。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "どくそをまぜる",
				'zh-tw': "混合毒素",
			},
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。自分のトラッシュから[悪]エネルギーを1枚選び、このポケモンにつける。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。從自己的棄牌區選擇1張【惡】能量卡，附於這隻寶可夢身上。",
			},
		},
		{
			name: {
				'ja-jp': "スモッグバースト",
				'zh-tw': "煙之暴擊",
			},
			damage: "20+",
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "自分の場のポケモンについている[悪]エネルギーの数×20ダメージ追加。",
				'zh-tw': "增加自己的場上寶可夢身上附加的【惡】能量的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560822,
				tcgplayer: 569273,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドガース",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [110],
};

export default card;
