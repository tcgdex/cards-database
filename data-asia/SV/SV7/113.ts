import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼橋龍",
		'zh-cn': "鋁鋼橋龍",
		ja: "ブリジュラス"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'zh-tw': "會在山裡挖洞來尋找食物。 身體非常堅硬，即使遇到 洞穴坍塌也絲毫不會在意。",
		'zh-cn': "會在山裡挖洞來尋找食物。 身體非常堅硬，即使遇到 洞穴坍塌也絲毫不會在意。",
		ja: "山中で 穴を 掘り エサを 探す。 落盤に 巻きこまれても へっちゃらなくらい 頑丈。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鋼之橋",
			'zh-cn': "鋼之橋",
			ja: "はがねのかけはし"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【鋼】能量的寶可夢【撤退】所需的能量全部消除。",
			'zh-cn': "只要這隻寶可夢在場上，自己的所有身上附有【鋼】能量的寶可夢【撤退】所需的能量全部消除。",
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員のにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "鐵之引爆",
			'zh-cn': "鐵之引爆",
			ja: "アイアンブラスター"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 160,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	dexId: [1018],
	rarity: "None"
}

export default card