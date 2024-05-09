import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルー"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1003],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古の 儀式で 使われた 器に 注がれた 恐怖が 土石を まとい ポケモンとなった。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "サンドブリング"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ごうまんインパクト"
		},

		damage: 220,

		effect: {
			ja: "このポケモンにダメカンが4個以上のっているなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card