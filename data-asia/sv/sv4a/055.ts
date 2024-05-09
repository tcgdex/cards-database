import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なきごえ"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ピカボルト"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card