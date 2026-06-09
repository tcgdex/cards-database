import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鍬農炮蟲",
		'zh-cn': "鍬農炮蟲",
		ja: "クワガノン"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "會抱住蟲電寶獲取電能， 然後從自己的大顎 連續發射強力的電磁光束。",
		'zh-cn': "會抱住蟲電寶獲取電能， 然後從自己的大顎 連續發射強力的電磁光束。",
		ja: "デンヂムシを 抱えて 電気を もらい 大あごから 強力な 電磁ビームを 連射する。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "伏特替換",
			'zh-cn': "伏特替換",
			ja: "ボルトチェンジ"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰區的【雷】寶可夢互換。",
			'zh-cn': "將這隻寶可夢與備戰區的【雷】寶可夢互換。",
			ja: "このポケモンをベンチのポケモンと入れ替える。"
		},

		damage: 90,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "閃雷攻擊",
			'zh-cn': "閃雷攻擊",
			ja: "スパーキングアタック"
		},

		damage: 240,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [738],

	thirdParty: {
		cardmarket: 779049
	}
}

export default card