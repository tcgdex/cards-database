import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕路奇亞",
		'zh-cn': "帕路奇亞",
		ja: "パルキア"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'zh-tw': "據說住在互相平行的 空間之間的狹縫。 是在神話中登場的寶可夢。",
		'zh-cn': "據說住在互相平行的 空間之間的狹縫。 是在神話中登場的寶可夢。",
		ja: "並行して 並ぶ 空間の 狭間に 住むと 言われている。 神話に 登場する ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "空間粉碎",
			'zh-cn': "空間粉碎",
			ja: "スペースクラッシュ"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的基本能量的數量×40點傷害。",
			'zh-cn': "造成這隻寶可夢身上附加的基本能量的數量×40點傷害。",
			ja: "このポケモンについている基本エネルギーの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Grass", "Water"]
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [484],

	thirdParty: {
		cardmarket: 787603
	}
}

export default card