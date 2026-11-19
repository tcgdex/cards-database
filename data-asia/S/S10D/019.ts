import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ラクライ",
		'zh-tw': "落雷獸"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [309],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "静電気を 体毛に たくわえて 放電する。 嵐が 近づくと 全身から 火花を 散らす。",
		'zh-tw': "會將靜電積蓄在體毛中後放電。當暴風雨來臨前， 會從全身冒出火花。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "エレキック",
			'zh-tw': "電氣踢"
		},

		damage: 10,
		cost: ["Lightning"]
	}, {
		name: {
			ja: "かみなりのキバ",
			'zh-tw': "雷電牙"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650979,
				tcgplayer: 569774,
				cardtrader: 234085,
			},
		},
	]
}

export default card