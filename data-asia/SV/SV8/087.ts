import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "バッフロン",
		'zh-tw': "爆炸頭水牛",
		'zh-cn': "爆炸頭水牛"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [626],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "頭突きだけで 車を 潰す。 頭の 毛が 大きいほど 群れでの 地位が 上がるのだ。",
		'zh-tw': "只用頭錘就能壓扁汽車。 頭部的那團毛越大一團， 在群體裡的地位就會越高。",
		'zh-cn': "只用頭錘就能壓扁汽車。 頭部的那團毛越大一團， 在群體裡的地位就會越高。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "まちうけホーン",
			'zh-tw': "等待角擊",
			'zh-cn': "等待角擊"
		},

		damage: 40,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを6個のせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置6個傷害指示物。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置6個傷害指示物。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スマッシュヘッド",
			'zh-tw': "粉碎頭擊",
			'zh-cn': "粉碎頭擊"
		},

		damage: 150,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card