import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬",
		ja: "パルスワン"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "電力增強了牠的腳力。當以最高速度奔跑時， 時速可以輕易超過９０公里。",
		ja: "電気の 力で 脚力を 増強。 トップスピードは 時速 ９０キロを 軽く 超える。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "窮追不捨",
			ja: "おいつめる"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "不服輸電光",
			ja: "まけんきスパーク"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【雷】能量即可使用。",
			ja: "このワザは、このポケモンにダメカンがのっているなら、エネルギー1個で使える。"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [836]
}

export default card