import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鑰圈兒",
		'zh-cn': "鑰圈兒",
		ja: "クレッフィ"
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "過去的貴族會將掌管金庫 鑰匙的鑰圈兒一代代地 傳承下去，並對其呵護備至。",
		'zh-cn': "過去的貴族會將掌管金庫 鑰匙的鑰圈兒一代代地 傳承下去，並對其呵護備至。",
		ja: "昔の 貴族は 金庫の カギを 管理させる クレッフィを 代々 引き継ぎ 大切に 扱った。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "插入抽出",
			'zh-cn': "插入抽出",
			ja: "さしこみドロー"
		},

		effect: {
			'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出2張卡。",
			'zh-cn': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出2張卡。",
			ja: "自分の手札を1枚トラッシュする。その後、自分の山札を2枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鉤住",
			'zh-cn': "鉤住",
			ja: "ひっかける"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [707]
}

export default card