import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハブネーク",
		'zh-tw': "飯匙蛇"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [336],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "硬い 岩で 刀の 尻尾を 研ぐ。 しげみに 隠れて 獲物に 近寄り 毒の キバで 襲う。",
		'zh-tw': "平時都用堅硬的岩石來打磨刀刃般的尾巴。會躲在樹叢裡， 然後趁獵物靠近時用毒牙襲擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ふりおろす",
			'zh-tw': "揮擊"
		},

		damage: "50+",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、50ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加50點傷害。"
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