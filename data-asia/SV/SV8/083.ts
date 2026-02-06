import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤルキモノ",
		'zh-tw': "過動猿",
		'zh-cn': "過動猿"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [288],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "いつも 暴れているので すぐに お腹が 空いてしまうが 食事の ときも じっとして いられない。",
		'zh-tw': "由於無時無刻都在大鬧， 肚子馬上就會覺得餓， 但牠卻連吃飯時也靜不下來。",
		'zh-cn': "由於無時無刻都在大鬧， 肚子馬上就會覺得餓， 但牠卻連吃飯時也靜不下來。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍",
			'zh-cn': "利爪揮砍"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793517
	}
}

export default card