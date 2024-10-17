import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超音波幼蟲",
		'zh-cn': "超音波幼蟲",
		ja: "ビブラーバ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "會劇烈地振動翅膀 來產生超音波。 能用消化液來溶解昏迷的獵物。",
		'zh-cn': "會劇烈地振動翅膀 來產生超音波。 能用消化液來溶解昏迷的獵物。",
		ja: "翅を 激しく 振動させて 超音波を 発生。 気絶した 獲物を 消化液で 溶かす。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "刺耳聲",
			'zh-cn': "刺耳聲",
			ja: "いやなおと"
		},

		effect: {
			'zh-tw': "在下個自己的回合，受到這個招式的寶可夢受到招式的傷害「+50」點。",
			'zh-cn': "在下個自己的回合，受到這個招式的寶可夢受到招式的傷害「+50」點。",
			ja: "次の自分の番、このワザを受けたポケモンが受けるワザのダメージは「+50」される。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利刃之風",
			'zh-cn': "利刃之風",
			ja: "カッターウインド"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [329]
}

export default card