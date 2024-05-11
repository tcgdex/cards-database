import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多刺菊石獸V",
		ja: "オムスターV"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "原始指引",
			ja: "げんしのみちびき"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張從名稱中有「化石」的物品卡進化而來的寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札から、名前に「化石」とつくグッズから進化するポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "觸手凝固",
			ja: "しょくしゅがため"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。",
			ja: "次の相手の番、このワザを受けた進化ポケモンは、ワザが使えない。"
		},

		damage: 110,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card