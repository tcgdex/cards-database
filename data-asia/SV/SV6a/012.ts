import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "キングドラex",
		'zh-tw': "刺龍王ex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "おうのごうれい",
				'zh-tw': "王之號召",
			},
			cost: ["Water"],
			effect: {
				ja: "自分のトラッシュから[W]ポケモンを3枚まで選び、ベンチに出す。",
				'zh-tw': "從自己的棄牌區選擇最多3張【水】寶可夢卡，放置於備戰區。",
			},
		},
		{
			name: {
				ja: "ハイドロポンプ",
				'zh-tw': "水炮",
			},
			damage: "50+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[W]エネルギーの数×50ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773761,
				tcgplayer: 566263,
			},
		},
	],

	evolveFrom: {
		ja: "シードラ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [230],

	suffix: "EX",
};

export default card;
