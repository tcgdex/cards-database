import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "エモンガ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Shimaris Yukichi",
	dexId: [587],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "電気を ほとばしらせながら 空を 舞うように 飛ぶ。 可愛いが やっかいなのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スカイウェーブ"
		},

		damage: 10,

		effect: {
			ja: "おたがいのベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0
}

export default card
