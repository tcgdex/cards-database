import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大尾狸",
		ja: "ビーダル"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "用樹幹和泥巴築起水壩，堵住河流建造住所。 以勤勞而聞名。",
		ja: "川を 木の幹や 泥の ダムで せき止めて 住処を 作る。 働き者として 知られている。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "勤勞門牙",
			ja: "はたらくまえば"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿5張為止。",
			ja: "自分の番に1回使える。自分の手札が5枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "長尾擊碎",
			ja: "テールスマッシュ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [400]
}

export default card