import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿爾宙斯V",
		ja: "アルセウスV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "三重蓄能",
			ja: "トリニティチャージ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的「寶可夢【V】」身上。並且重洗牌庫。",
			ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量刀鋒",
			ja: "パワーエッジ"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Colorless"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card