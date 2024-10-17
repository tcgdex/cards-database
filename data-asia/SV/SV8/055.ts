import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネ"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [702],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ほっぺの ヒゲから 電波を 飛ばし 仲間と 連絡を とりあう。 電気が 減ると 丸まり 眠る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "でんじソナー"
		},

		effect: {
			ja: "自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加える。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "かじる"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card