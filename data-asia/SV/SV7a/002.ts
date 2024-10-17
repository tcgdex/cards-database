import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "睡睡菇",
		'zh-cn': "睡睡菇",
		ja: "ネマシュ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "頭上的蘑菇傘非常好吃， 雖然會被森林中的寶可夢吃掉， 但是過了一晚上就會再生。",
		'zh-cn': "頭上的蘑菇傘非常好吃， 雖然會被森林中的寶可夢吃掉， 但是過了一晚上就會再生。",
		ja: "頭の 傘は とても 美味しい。 森の ポケモンたちに 食べられるが 一晩で 再生する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "附著",
			'zh-cn': "附著",
			ja: "くっつく"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [755]
}

export default card