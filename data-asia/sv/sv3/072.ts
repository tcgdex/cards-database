import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘルガー"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [229],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "口から 吹き出す 炎で 火傷すると いつまでたっても 傷口が うずいてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "かかんにせめる"
		},

		damage: "50＋",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、70ダメージ追加。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "シャドースラッシュ"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card