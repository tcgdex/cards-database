import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォッシュロトム",
		'zh-tw': "清洗洛托姆",
		'zh-cn': "清洗洛托姆",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "洗濯機に 入った 姿。 あたりを 水浸しにしては 満足そうに うなずいている。",
		'zh-tw': "鑽進了洗衣機裡的樣子。 會讓周圍都淹沒在水裡， 然後一副滿足地點著頭。",
		'zh-cn': "鑽進了洗衣機裡的樣子。 會讓周圍都淹沒在水裡， 然後一副滿足地點著頭。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もみあらう",
				'zh-tw': "搓洗",
				'zh-cn': "搓洗",
			},
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「10」回復する。",
				'zh-tw': "將自己的所有寶可夢各恢復「10」HP。",
				'zh-cn': "將自己的所有寶可夢各恢復「10」HP。",
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

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821860,
				tcgplayer: 628669,
			},
		},
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479],
};

export default card;
