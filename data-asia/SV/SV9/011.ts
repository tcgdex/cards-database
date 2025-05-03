import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャローテ",
		'zh-tw': "蒂蕾喵",
		'zh-cn': "蒂蕾喵"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。",
		'zh-tw': "會靈巧操控長長的體毛下 隱藏的藤蔓，將堅硬的 花苞甩向敵人猛打。",
		'zh-cn': "會靈巧操控長長的體毛下 隱藏的藤蔓，將堅硬的 花苞甩向敵人猛打。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マジカルリーフ",
			'zh-tw': "魔法葉",
			'zh-cn': "魔法葉"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加し、このポケモンのHPを「30」回復する。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害，並將這隻寶可夢恢復「30」HP。",
			'zh-cn': "擲1次硬幣若為正面，則增加30點傷害，並將這隻寶可夢恢復「30」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card