import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "なきごえ"
		},

		effect: {
			ja: "次の相手の番、このワザを受けた相手のバトルポケモンが使うワザのダメージは「-20」される。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "でんこうせっか"
		},

		effect: {
			ja: "コインを1回投げオモテなら、10ダメージを追加。"
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567886, tcgplayer: 602204, cardtrader: 143017 }, stamp: ["1st-edition"] }
	]
}

export default card
