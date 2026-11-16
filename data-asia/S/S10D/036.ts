import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ラムパルド",
		'zh-tw': "戰槌龍"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [409],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		ja: "ズガイドス"
	},

	description: {
		ja: "頭突きが 得意な 古代のポケモン。 本当に 脳みそが 小さいので 愚かで 滅んだという説も ある。",
		'zh-tw': "擅長頭錘的古代寶可夢。 因為大腦真的很小，所以也有說法 認為牠是因為太笨而滅亡的。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "ジュラシックハンマー",
			'zh-tw': "侏儸紀錘"
		},

		effect: {
			ja: "相手の手札が3枚以下なら、このワザは失敗。",
			'zh-tw': "若對手的手牌為3張以下，則這個招式失敗。"
		},

		damage: 240,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651004,
				tcgplayer: 569791,
				cardtrader: 234102,
			},
		},
	]
}

export default card