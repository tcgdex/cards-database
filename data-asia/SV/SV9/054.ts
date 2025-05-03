import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホップのサダイジャ",
		'zh-tw': "赫普的沙螺蟒",
		'zh-cn': "赫普的沙螺蟒"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [844],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "体を 目一杯 伸縮させ ダンプカーも 押し流すほどの 勢いで 砂を 噴射する。",
		'zh-tw': "會把身體伸長到極限後， 用足以沖走大卡車的 氣勢噴射出沙子。",
		'zh-cn': "會把身體伸長到極限後， 用足以沖走大卡車的 氣勢噴射出沙子。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "じひびき",
			'zh-tw': "地鳴",
			'zh-cn': "地鳴"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "グラウンドブレイク",
			'zh-tw': "大地裂破",
			'zh-cn': "大地裂破"
		},

		damage: 140,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card