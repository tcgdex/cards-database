import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超能豔鴕",
		'zh-cn': "超能豔鴕",
		ja: "クエスパトラ"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "會從鮮豔褶邊的縫隙間 釋放出精神力量，藉此以 時速２００公里的速度狂奔。",
		'zh-cn': "會從鮮豔褶邊的縫隙間 釋放出精神力量，藉此以 時速２００公里的速度狂奔。",
		ja: "色とりどりの フリルの 隙間から サイコパワーを 放出して 時速２００キロで 疾走する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "奧密之眼",
			'zh-cn': "奧密之眼",
			ja: "ミスティックアイ"
		},

		effect: {
			'zh-tw': "選擇1隻對手的進化寶可夢，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。",
			'zh-cn': "選擇1隻對手的進化寶可夢，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。",
			ja: "相手の進化しているポケモンを1匹選び、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "螺旋吸取",
			'zh-cn': "螺旋吸取",
			ja: "スパイラルドレイン"
		},

		effect: {
			'zh-tw': "‌將這隻寶可夢恢復「30」HP。",
			'zh-cn': "‌將這隻寶可夢恢復「30」HP。",
			ja: "このポケモンのHPを「30」回復する。"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [956]
}

export default card