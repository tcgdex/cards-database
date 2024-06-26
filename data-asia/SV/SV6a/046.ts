import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙斧戰龍"
	},

	illustrator: "Tsuyoshi Nagano",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'zh-tw': "會以自傲的牙齒壓制敵人。 牙齒的鋒利程度無與倫比， 就連鐵塔都能夠一斬而斷。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "斧擊在地"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量卡，則將那隻寶可夢【昏厥】。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "龍之波動"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡丟棄。"
		},

		damage: 230,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card