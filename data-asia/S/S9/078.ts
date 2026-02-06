import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "姆克兒",
		ja: "ムックル"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "為了獵捕蟲寶可夢，以龐大的群體在山野間飛來飛去。 叫聲非常吵鬧。",
		ja: "むしポケモンを ねらって 野山を 大勢の 群れで 飛び回る。 鳴き声が とても やかましい。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鉤爪",
			ja: "かぎづめ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [396],

	thirdParty: {
		cardmarket: 605929
	}
}

export default card