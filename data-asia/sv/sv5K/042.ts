import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "イダイナキバ"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [984],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "近年 目撃例が ある。 イダイナキバという 名は ある本に 記された 生物から 取られた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "じばんほうかい"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。この番、手札から「古代」のサポートを出して使っていたなら、さらに3枚トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			ja: "きょだいなキバ"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card