import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>尼多后",
		'zh-cn': "<火箭隊的>尼多后",
		ja: "ロケット団のニドクイン"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'zh-tw': "會把孩子放在背上的 刺與刺之間來哄牠們。 這時候絕對不會釋放毒素。",
		'zh-cn': "會把孩子放在背上的 刺與刺之間來哄牠們。 這時候絕對不會釋放毒素。",
		ja: "背中の 棘の 隙間に 子どもを 乗せて あやす。 そのときに 毒が 出ることは けっして ないのだ。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "愛之衝擊",
			'zh-cn': "愛之衝擊",
			ja: "ラブインパクト"
		},

		effect: {
			'zh-tw': "若自己的備戰區有名稱中有「尼多王」的寶可夢，則增加120點傷害。",
			'zh-cn': "若自己的備戰區有名稱中有「尼多王」的寶可夢，則增加120點傷害。",
			ja: "自分のベンチに、名前に「ニドキング」とつくポケモンがいるなら、120ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "百萬噸重踢",
			'zh-cn': "百萬噸重踢",
			ja: "メガトンキック"
		},

		damage: 130,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [31]
}

export default card