import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噴火龍VSTAR",
		ja: "リザードンVSTAR"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "爆裂火焰",
			ja: "ばくれつファイヤー"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
			ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。"
		},

		damage: "130＋",
		cost: ["Fire", "Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星火焰",
			ja: "スターブレイズ"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。[對戰中，己方只可使用1次【VSTAR】力量。]",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		damage: 320,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 687494
	}
}

export default card