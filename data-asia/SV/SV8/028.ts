import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トドグラー"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [364],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "流氷の 上で 生活。 泳ぎながら 獲物の 匂いを 嗅ぎわけて 見つけだし 捕まえる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つきたおし"
		},

		damage: 30
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "アイスボール"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3
}

export default card