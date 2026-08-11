import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドクイン",
		'zh-tw': "<火箭隊的>尼多后",
		'zh-cn': "<火箭隊的>尼多后",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "背中の 棘の 隙間に 子どもを 乗せて あやす。 そのときに 毒が 出ることは けっして ないのだ。",
		'zh-tw': "會把孩子放在背上的 刺與刺之間來哄牠們。 這時候絕對不會釋放毒素。",
		'zh-cn': "會把孩子放在背上的 刺與刺之間來哄牠們。 這時候絕對不會釋放毒素。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ラブインパクト",
				'zh-tw': "愛之衝擊",
				'zh-cn': "愛之衝擊",
			},
			damage: "60+",
			cost: ["Darkness"],
			effect: {
				ja: "自分のベンチに、名前に「ニドキング」とつくポケモンがいるなら、120ダメージ追加。",
				'zh-tw': "若自己的備戰區有名稱中有「尼多王」的寶可夢，則增加120點傷害。",
				'zh-cn': "若自己的備戰區有名稱中有「尼多王」的寶可夢，則增加120點傷害。",
			},
		},
		{
			name: {
				ja: "メガトンキック",
				'zh-tw': "百萬噸重踢",
				'zh-cn': "百萬噸重踢",
			},
			damage: 130,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821892,
				tcgplayer: 628701,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドリーナ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [31],
};

export default card;
