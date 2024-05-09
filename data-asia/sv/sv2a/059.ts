import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウインディ"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "あつくたぎる"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、このポケモンにつける。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			ja: "ダイナマイトファング"
		},

		damage: 240,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4
}

export default card