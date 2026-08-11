import { Card } from "models/database/card"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪兒",
		'zh-cn': "齒輪兒",
		'ja-jp': "ギアル"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "２個身體比雙胞胎還要親近。 要是換成別的齒輪兒， 就沒有辦法好好咬合。",
		'zh-cn': "２個身體比雙胞胎還要親近。 要是換成別的齒輪兒， 就沒有辦法好好咬合。",
		'ja-jp': "２つの 体は 双子よりも 近い。 べつの 体同士だと いまいち うまく 噛み合わない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "吸引",
			'zh-cn': "吸引",
			'ja-jp': "ひきつける"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'zh-cn': "從自己的牌庫抽出1張卡。",
			'ja-jp': "自分の山札を1枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "光束",
			'zh-cn': "光束",
			'ja-jp': "ビーム"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 779081,
				tcgplayer: 567922,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [599],
}

export default card