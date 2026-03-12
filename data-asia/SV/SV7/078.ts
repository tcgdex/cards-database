import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "魅力喵",
		'zh-cn': "魅力喵",
		ja: "ニャルマー"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "一不高興就會豎起爪子。 但有時也會從喉嚨發出聲響來撒嬌。 這樣的性格很受部分人的喜愛。",
		'zh-cn': "一不高興就會豎起爪子。 但有時也會從喉嚨發出聲響來撒嬌。 這樣的性格很受部分人的喜愛。",
		ja: "気に入らないと ツメを 立てるが たまに のどを 鳴らして 甘える 性格が 一部に 大人気だ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鉤住",
			'zh-cn': "鉤住",
			ja: "ひっかける"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [431],

	thirdParty: {
		cardmarket: 779092
	}
}

export default card