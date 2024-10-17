import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焰后蜥",
		'zh-cn': "焰后蜥",
		ja: "エンニュート"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "焰后蜥的群體之間 一旦碰上彼此，就會使用 費洛蒙氣體展開雄性爭奪戰。",
		'zh-cn': "焰后蜥的群體之間 一旦碰上彼此，就會使用 費洛蒙氣體展開雄性爭奪戰。",
		ja: "エンニュートの 群れ同士が 鉢合わせると フェロモンガスで オスを 奪い合う 争いになる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "突然炙烤",
			'zh-cn': "突然炙烤",
			ja: "いきなりあぶる"
		},

		effect: {
			'zh-tw': "對手選擇對手自己的1張手牌，將其丟棄。在這個回合，若這隻寶可夢從「夜盜火蜥」進化，則再丟棄2張。",
			'zh-cn': "對手選擇對手自己的1張手牌，將其丟棄。在這個回合，若這隻寶可夢從「夜盜火蜥」進化，則再丟棄2張。",
			ja: "相手は相手自身の手札を1枚選び、トラッシュする。この番、このポケモンが「ヤトウモリ」から進化していたなら、さらに2枚トラッシュする。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "噴射火焰",
			'zh-cn': "噴射火焰",
			ja: "かえんほうしゃ"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 130,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [758]
}

export default card