import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "カットロトム",
		'zh-tw': "切割洛托姆",
		'zh-cn': "切割洛托姆",
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "ロトム図鑑が 誕生する きっかけとなった 家電製品の ひとつが 芝刈り機なのだ。",
		'zh-tw': "成為洛托姆圖鑑 誕生契機的其中一樣 家電用品就是割草機。",
		'zh-cn': "成為洛托姆圖鑑 誕生契機的其中一樣 家電用品就是割草機。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かりとりカッター",
				'zh-tw': "割除利刃",
				'zh-cn': "割除利刃",
			},
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "場に出ているスタジアムをトラッシュする。",
				'zh-tw': "將場上的競技場卡丟棄。",
				'zh-cn': "將場上的競技場卡丟棄。",
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

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821835,
				tcgplayer: 628645,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479],
};

export default card;
