import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "メノクラゲ",
		'zh-tw': "瑪瑙水母"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [72],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ほとんどが 水分で できている。 体は 海の中では 水と 同化して とても 見えづらいのだ。",
		'zh-tw': "絕大部分都是由水組成的身體在海中會與海水同化， 令其他生物很難看見牠。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ぴりっ",
			'zh-tw': "麻"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "みずまき",
			'zh-tw': "灑水"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card