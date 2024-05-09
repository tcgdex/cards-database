import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "マグマッグ"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山が 活発だった 太古の 世界では 今よりも たくさんの マグマッグが 暮らしていたという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "あついマグマ"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card