import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ハブネーク",
		'zh-tw': "飯匙蛇"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [336],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。",
		'zh-tw': "平時都用堅硬的岩石來打磨刀刃般的尾巴。會躲在樹叢裡， 然後趁獵物靠近時用毒牙襲擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき",
			'zh-tw': "毒液"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムショック",
			'zh-tw': "毒液衝擊"
		},

		damage: "60+",

		effect: {
			ja: "相手のバトルポケモンがどくなら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card