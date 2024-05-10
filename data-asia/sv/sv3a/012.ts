import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "チョンチー",
		'zh-tw': "燈籠魚"
	},

	illustrator: "yuu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [170],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "暗い 海底では いつも 点滅している 触手の 灯り だけが 通信手段。",
		'zh-tw': "在黑暗的海底，觸手上不斷閃爍的亮光 是牠唯一的通訊手段。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "てらす",
			'zh-tw': "光照"
		},

		effect: {
			ja: "自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードを山札の下にもどす。",
			'zh-tw': "查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡放回牌庫下方。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "プチでんき",
			'zh-tw': "小電氣"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card