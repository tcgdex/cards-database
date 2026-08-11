import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒートロトム",
		'zh-tw': "加熱洛托姆",
		'zh-cn': "加熱洛托姆",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "オーブンレンジ 自体の 調子が 悪いと 中に 入っている ロトムも 元気が なくなるのだ。",
		'zh-tw': "如果烤箱微波爐本身運轉不良， 鑽進裡面的洛托姆 也會變得無精打采。",
		'zh-cn': "如果烤箱微波爐本身運轉不良， 鑽進裡面的洛托姆 也會變得無精打采。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "こがす",
				'zh-tw': "灼熱",
				'zh-cn': "灼熱",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				'zh-cn': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
		{
			name: {
				ja: "ガジェットショー",
				'zh-tw': "配件秀",
				'zh-cn': "配件秀",
			},
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。",
				'zh-tw': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
				'zh-cn': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821852,
				tcgplayer: 628662,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479],
};

export default card;
