import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "レアコイル",
		'zh-tw': "三合一磁怪"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [82],
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		ja: "コイル"
	},

	description: {
		ja: "３匹の コイルが 連結した。 強力な 電波を 放ち まわりの 様子を 観測する。",
		'zh-tw': "由３隻小磁怪連結而成。會發射出強烈的電波 來觀測周圍的狀況。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はねかえす",
			'zh-tw': "彈回"
		},

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651013,
				tcgplayer: 569800,
				cardtrader: 234111,
			},
		},
	]
}

export default card