import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "モノズ"
	},

	illustrator: "YASHIRO Nanaco",
	rarity: "Common",
	category: "Pokemon",
	dexId: [633],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "棲み処は 洞窟の 奥深く。 エサも 少ないので 動くものは なんでも 食いつき 食べようとする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ふみならす"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "かみつく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card