import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "切割洛托姆",
		'zh-cn': "切割洛托姆",
		ja: "カットロトム"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "成為洛托姆圖鑑 誕生契機的其中一樣 家電用品就是割草機。",
		'zh-cn': "成為洛托姆圖鑑 誕生契機的其中一樣 家電用品就是割草機。",
		ja: "ロトム図鑑が 誕生する きっかけとなった 家電製品の ひとつが 芝刈り機なのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "割除利刃",
			'zh-cn': "割除利刃",
			ja: "かりとりカッター"
		},

		effect: {
			'zh-tw': "將場上的競技場卡丟棄。",
			'zh-cn': "將場上的競技場卡丟棄。",
			ja: "場に出ているスタジアムをトラッシュする。"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "配件秀",
			'zh-cn': "配件秀",
			ja: "ガジェットショー"
		},

		effect: {
			'zh-tw': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
			'zh-cn': "造成自己的所有寶可夢身上附加的「寶可夢道具」卡的數量×30點傷害。",
			ja: "自分のポケモン全員についている「ポケモンのどうぐ」の数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479]
}

export default card