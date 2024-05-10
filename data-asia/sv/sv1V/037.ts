import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ミライドンex",
		'zh-tw': "密勒頓ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "タンデムユニット",
			'zh-tw': "串聯裝置"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札からタイプのたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇最多2張【雷】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "フォトンブラスター",
			'zh-tw': "光子引爆"
		},

		damage: 220,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card