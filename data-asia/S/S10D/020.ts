import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ライボルト",
		'zh-tw': "雷電獸"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [310],
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		ja: "ラクライ"
	},

	description: {
		ja: "電気で 筋肉を 刺激するので 素早く 動ける。 筋肉痛も 電気で ほぐすので すぐ 治る。",
		'zh-tw': "會用電流刺激肌肉，因此能迅速行動。電流也能讓 肌肉放鬆並快速治癒酸痛。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "アサルトレーザー",
			'zh-tw': "進擊鐳射"
		},

		effect: {
			ja: "相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上附有「寶可夢道具」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Lightning", "Colorless", "Colorless"]
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
				cardmarket: 650980,
				tcgplayer: 569775,
				cardtrader: 234086,
			},
		},
	]
}

export default card