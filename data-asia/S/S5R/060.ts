import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [876],
	rarity: "Common",
	set: Set,

	name: {
		ja: "イエッサン",
		'zh-tw': "愛管侍"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ツノで 近くの 生き物の 気持ちを 感じとる。 ポジティブな 感情が 力の 源。",
		'zh-tw': "能透過自己的角去感受附近生物的情感。正面情緒是牠的能量之源。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "もってくる",
			'zh-tw': "呼喚"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "ハンドキネシス",
			'zh-tw': "手中強念"
		},

		effect: {
			ja: "自分の手札の枚数×10ダメージ。",
			'zh-tw': "造成自己的手牌的張數×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533872, tcgplayer: 569101, cardtrader: 240071 } }
	]
}

export default card