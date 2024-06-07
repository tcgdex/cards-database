import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ペンドラー",
		'zh-tw': "蜈蚣王"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Shiburingaru",
	dexId: [545],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "首のツメで 獲物を つかむと そのまま 地面に 叩きつけ 毒のトゲを 突きたてるぞ。",
		'zh-tw': "用頸部的爪子夾住獵物後， 會直接將對方摔到地上， 然後用毒刺戳下去。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ひどうなひとさし",
			'zh-tw': "偏道一回"
		},

		effect: {
			ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。",
			'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「10」為止。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ヘドロばくだん",
			'zh-tw': "污泥炸彈"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card