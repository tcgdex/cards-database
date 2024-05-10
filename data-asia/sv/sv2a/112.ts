import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "サイドン",
		'zh-tw': "鑽角犀獸"
	},

	illustrator: "GOSSAN",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [112],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "全身を よろいのような 皮膚で 守っている。 ２０００度の マグマの 中でも 生きられる。",
		'zh-tw': "全身被鎧甲般的皮膚保護著。甚至能在 ２０００度的熔岩中生存。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "たたきつぶす",
			'zh-tw': "砸碎"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "カリスマドリル",
			'zh-tw': "領導力鑽"
		},

		damage: "40+",

		effect: {
			ja: "この番、手札から「サカキのカリスマ」を出して使っていたなら、140ダメージ追加。",
			'zh-tw': "在這個回合，若從手牌使出了「坂木的領導力」，則增加140點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card