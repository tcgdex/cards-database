import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "サメハダー"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [319],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "海のギャングと 呼ばれ 生息 海域に 入りこんでしまった 船は もれなく 襲われてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "アクアインパクト"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card