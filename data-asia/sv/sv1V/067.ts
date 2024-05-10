import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "イキリンコ",
		'zh-tw': "怒鸚哥"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [931],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "緑色の 羽の イキリンコが 最大勢力。 エサを 探す 朝と 晩は とても 騒がしい。",
		'zh-tw': "綠色羽毛的怒鸚哥勢力最為龐大。在覓食時段的 早晨和夜晚會非常吵鬧。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "そらをとぶ",
			'zh-tw': "飛翔"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card