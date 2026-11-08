import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "未知圖騰V",
		'ja-jp': "アンノーンV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "奇異刻印",
			'ja-jp': "あやしいこくいん"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'ja-jp': "相手のバトルポケモンをこんらんにする。"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "勝利象徵",
			'ja-jp': "ビクトリーシンボル"
		},

		effect: {
			'zh-tw': "使用這個招式時，若自己剩餘獎賞卡的張數為1張，則這場對戰己方獲勝。",
			'ja-jp': "このワザを使ったとき、自分のサイドの残り枚数が1枚なら、この対戦は自分の勝ちになる。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680836,
				tcgplayer: 570160,
			},
		},
	],

	retreat: 1,
	regulationMark: "F"
}

export default card