import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "グルトン",
		'zh-tw': "愛吃豚"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [915],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "一日中 エサを 探す。 優れた 嗅覚を 持つが エサ探し 以外に 使わない。",
		'zh-tw': "一整天都在覓食。雖然擁有優秀的嗅覺， 但卻只被用在覓食上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "チャームボイス",
			'zh-tw': "魅惑之聲"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card