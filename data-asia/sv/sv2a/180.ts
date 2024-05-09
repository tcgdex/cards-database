import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オムナイト"
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	dexId: [138],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "絶滅した 古代のポケモン。 １０本の脚で 水を かき 漂うように 泳ぐ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "しょくしゅでもどす"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card