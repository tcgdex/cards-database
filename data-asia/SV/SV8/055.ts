import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "デデンネ",
		'zh-tw': "咚咚鼠",
		'zh-cn': "咚咚鼠"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [702],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "ほっぺの ヒゲから 電波を 飛ばし 仲間と 連絡を とりあう。 電気が 減ると 丸まり 眠る。",
		'zh-tw': "會從雙頰上的鬍鬚發出電波 來與同伴相互聯絡。 電力變少時會蜷縮起來睡覺。",
		'zh-cn': "會從雙頰上的鬍鬚發出電波 來與同伴相互聯絡。 電力變少時會蜷縮起來睡覺。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "でんじソナー",
			'zh-tw': "電磁聲納",
			'zh-cn': "電磁聲納"
		},

		effect: {
			ja: "自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。",
			'zh-cn': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			'zh-cn': "咬"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793489
	}
}

export default card