import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒヤッキー",
		'zh-tw': "冷水猿",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "水が きれいな 場所を 好む。 頭に ためこんだ 水が減ると 尻尾から 吸いあげて 補給。",
		'zh-tw': "喜歡水質乾淨的地方。頭上儲存的水如果減少，就會從尾巴吸取水來補給。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "みずのはどう",
				'zh-tw': "水之波動",
			},
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
		{
			name: {
				ja: "ずぶぬれサーカス",
				'zh-tw': "濕透雜耍",
			},
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるサポートの枚数×60ダメージ。",
				'zh-tw': "查看對手的手牌，造成其中支援者卡的張數×60點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571588,
				tcgplayer: 569329,
			},
		},
	],

	evolveFrom: {
		ja: "ヒヤップ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [516],
};

export default card;
