import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "キャタピー",
		'zh-tw': "綠毛蟲",
		'zh-cn': "綠毛蟲"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [10],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "脚は 短いが 吸盤に なっているので 坂でも 壁でも くたびれることなく 進んでいく。",
		'zh-tw': "別看牠的腳很短， 因為是吸盤，所以無論是 斜坡還是牆壁都能輕鬆前進。",
		'zh-cn': "別看牠的腳很短， 因為是吸盤，所以無論是 斜坡還是牆壁都能輕鬆前進。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬",
			'zh-cn': "蟲咬"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card