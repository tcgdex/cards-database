import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浩大鯨",
		'zh-cn': "浩大鯨",
		ja: "ハルクジラ"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'zh-tw': "會集中冰能量使上顎的角 變得超低溫，然後將自己 附近的一切都凍成冰塊。",
		'zh-cn': "會集中冰能量使上顎的角 變得超低溫，然後將自己 附近的一切都凍成冰塊。",
		ja: "氷エネルギーの 集中する 上あごの ツノが 超低温になって 周囲を 凍らせる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "堅堅之軀",
			'zh-cn': "堅堅之軀",
			ja: "がっちりボディ"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "這隻寶可夢受到招式的傷害「-30」點。",
			ja: "このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "危殆嘴",
			'zh-cn': "危殆嘴",
			ja: "デンジャーマウス"
		},

		damage: 150,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [975]
}

export default card