import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネ",
		'zh-tw': "咚咚鼠"
	},

	illustrator: "zig",
	rarity: "Common",
	category: "Pokemon",
	dexId: [702],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "体が 小さく 発電器官が 未熟なので 人家の 電気を 尻尾で 吸い取り 充電する。",
		'zh-tw': "由於體型嬌小，發電器官尚未發達，因此會用尾巴 吸取住家的電力來充電。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "エネかじり",
			'zh-tw': "咬能量"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card