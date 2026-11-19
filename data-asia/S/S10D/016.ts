import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "フタチマル",
		'zh-tw': "雙刃丸"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [502],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		ja: "ミジュマル"
	},

	description: {
		ja: "日々の 鍛錬の 賜物か 帆太刀 ２枚の 貝さばき たるや 剣豪も 裸足の 腕前なり。",
		'zh-tw': "或許是拜平日的鍛鍊所賜， 運用兩枚扇貝貝刀的高超技術 能令劍豪也甘拜下風。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "シェルブレード",
			'zh-tw': "硬殼利刃"
		},

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650976,
				tcgplayer: 569771,
				cardtrader: 234082,
			},
		},
	]
}

export default card