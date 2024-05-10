import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "マグマッグ",
		'zh-tw': "熔岩蟲"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山が 活発だった 太古の 世界では 今よりも たくさんの マグマッグが 暮らしていたという。",
		'zh-tw': "聽說在火山活動頻繁的 太古時代，世界上生活著 比現在更多的熔岩蟲。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "あついマグマ",
			'zh-tw': "熾熱熔岩"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card