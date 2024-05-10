import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤバチャ",
		'zh-tw': "來悲茶"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [854],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "寂しく 死んだ者の 魂が 飲み残しの 紅茶に 取り憑いた。 ホテルや 民家に 現れる。",
		'zh-tw': "死於孤獨的死者之魂附在了喝剩的紅茶上。 會在旅館或民宅出現。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "さめたおちゃ",
			'zh-tw': "冷茶"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card