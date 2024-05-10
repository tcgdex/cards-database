import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ウソハチ",
		'zh-tw': "盆才怪"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [438],
	hp: 30,
	types: ["Fighting"],

	description: {
		ja: "体内の 余計な 水分を 目 から 出して 調節する。 泣いているように 見えるだけ。",
		'zh-tw': "雖然看似在哭泣，但那不過是牠在把多餘的水從眼睛排出，以調節體內的水分罷了。"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "ビィビィなく",
			'zh-tw': "嚶嚶鳴叫"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card
