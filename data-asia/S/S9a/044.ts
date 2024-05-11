import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 狙射樹梟V",
		ja: "ヒスイ ジュナイパーV"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "獵山",
			ja: "やまがり"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "近身射擊",
			ja: "きんせつしゃげき"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card