import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "テラパゴス",
		'zh-tw': "太樂巴戈斯",
		'zh-cn': "太樂巴戈斯"
	},

	illustrator: "GIDORA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1024],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "テラスタルの 甲羅は 相手の 技を 受けると そのエネルギーを 吸い取って 自分のものにする。",
		'zh-tw': "太晶的甲殼若受到對手的 招式攻擊，就會把該招式 的能量吸收來供自己使用。",
		'zh-cn': "太晶的甲殼若受到對手的 招式攻擊，就會把該招式 的能量吸收來供自己使用。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "プリズムチャージ",
			'zh-tw': "稜鏡充能",
			'zh-cn': "稜鏡充能"
		},

		effect: {
			ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚まで選び、自分の「テラスタル」のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，以任意方式附於自己的「太晶」寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，以任意方式附於自己的「太晶」寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハードタックル",
			'zh-tw': "堅硬衝撞",
			'zh-cn': "堅硬衝撞"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card