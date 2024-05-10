import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ケーシィ",
		'zh-tw': "凱西"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [63],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "眠ったまま テレポート できる。 眠りが 深いほど 離れた 場所に 移動する という。",
		'zh-tw': "就算在睡夢中也能使用瞬間移動。據說當牠睡得越熟， 瞬間移動的距離就會越遠。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコショット",
			'zh-tw': "精神射擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card