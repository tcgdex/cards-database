import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "清洗洛托姆",
		'zh-cn': "清洗洛托姆",
		ja: "ウォッシュロトム"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "鑽進了洗衣機裡的樣子。 會讓周圍都淹沒在水裡， 然後一副滿足地點著頭。",
		'zh-cn': "鑽進了洗衣機裡的樣子。 會讓周圍都淹沒在水裡， 然後一副滿足地點著頭。",
		ja: "洗濯機に 入った 姿。 あたりを 水浸しにしては 満足そうに うなずいている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搓洗",
			'zh-cn': "搓洗",
			ja: "もみあらう"
		},

		effect: {
			'zh-tw': "將自己的所有寶可夢各恢復「10」HP。",
			'zh-cn': "將自己的所有寶可夢各恢復「10」HP。",
			ja: "自分のポケモン全員のHPを、それぞれ「10」回復する。"
		},

		damage: 20,
		cost: ["Water"]
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
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [479]
}

export default card