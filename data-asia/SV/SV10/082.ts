import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のポリゴン2",
		'zh-tw': "<火箭隊的>多邊獸Ⅱ",
		'zh-cn': "<火箭隊的>多邊獸Ⅱ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "最新科学で 進化した 人工の ポケモン。 ときどき プログラムにない 反応をみせる。",
		'zh-tw': "利用最新科技進化的 人工寶可夢。有時會 表現出程式裡沒有的反應。",
		'zh-cn': "利用最新科技進化的 人工寶可夢。有時會 表現出程式裡沒有的反應。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "Rコマンド",
				'zh-tw': "R指令",
				'zh-cn': "R指令",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある、名前に「ロケット団」とつくサポートの枚数×20ダメージ。",
				'zh-tw': "造成自己的棄牌區的，名稱中有「火箭隊」的支援者卡的張數×20點傷害。",
				'zh-cn': "造成自己的棄牌區的，名稱中有「火箭隊」的支援者卡的張數×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821914,
				tcgplayer: 628723,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のポリゴン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [233],
};

export default card;
