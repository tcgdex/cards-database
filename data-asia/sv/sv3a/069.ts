import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グラードン"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	dexId: [383],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "カイオーガと 死闘の末 長い 眠りに ついた。大地の 化身と 言われる 伝説の ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みなぎるちから"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マグマパージ"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを4枚までトラッシュし、その枚数×60ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card