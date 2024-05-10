import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "キバニア",
		'zh-tw': "利牙魚"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [318],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "鋭い キバと たくましい 顎を もつ。 船乗りたちは キバニアの すみかには けっして 近づかない。",
		'zh-tw': "擁有銳利的牙齒和結實的下巴。船員們絕對不會去靠近利牙魚棲息的地方。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙"
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