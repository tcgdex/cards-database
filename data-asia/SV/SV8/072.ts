import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "サザンドラex",
		'zh-tw': "三首惡龍ex",
		'zh-cn': "三首惡龍ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "クラッシュヘッズ",
			'zh-tw': "粉碎頭",
			'zh-cn': "粉碎頭"
		},

		damage: 200,

		effect: {
			ja: "相手の山札を上から3枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方3張卡丟棄。",
			'zh-cn': "將對手的牌庫上方3張卡丟棄。"
		}
	}, {
		cost: ["Psychic", "Darkness", "Metal", "Colorless"],

		name: {
			ja: "オブシディアン",
			'zh-tw': "黑曜石",
			'zh-cn': "黑曜石"
		},

		damage: 130,

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ130ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻備戰寶可夢也各受到130點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的2隻備戰寶可夢也各受到130點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793506
	}
}

export default card