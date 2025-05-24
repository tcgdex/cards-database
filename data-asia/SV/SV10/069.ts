import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>瓦斯彈",
		'zh-cn': "<火箭隊的>瓦斯彈",
		ja: "ロケット団のドガース"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "薄薄的氣球狀身體裡 儲滿了劇毒的瓦斯， 所以有時會發生大爆炸。",
		'zh-cn': "薄薄的氣球狀身體裡 儲滿了劇毒的瓦斯， 所以有時會發生大爆炸。",
		ja: "薄い バルーン状の 体に 猛毒の ガスが 詰まっているので ときどき 大爆発を 起こす。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "警備濁霧",
			'zh-cn': "警備濁霧",
			ja: "アラートスモッグ"
		},

		effect: {
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，從自己的牌庫選擇最多2張名稱中有「瓦斯彈」的寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，從自己的牌庫選擇最多2張名稱中有「瓦斯彈」的寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の山札から、名前に「ドガース」とつくポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "瓦斯漏氣",
			'zh-cn': "瓦斯漏氣",
			ja: "ガスもれ"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [109]
}

export default card