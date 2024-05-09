import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ベロリンガ"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [108],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "虫ポケモンが おもな エサ。 長い 舌で 相手を 舐めて 痺れた ところを 丸飲みにする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ベロベロバインド"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card