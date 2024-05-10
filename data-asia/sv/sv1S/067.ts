import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グルトン",
		'zh-tw': "愛吃豚"
	},

	illustrator: "Mina Nakai",
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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "きまぐれタックル",
			'zh-tw': "胡思亂撞"
		},

		damage: 70,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card