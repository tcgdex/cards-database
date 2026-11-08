import { Card } from "models/database/card"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄梅塔",
		'zh-cn': "美錄梅塔",
		'ja-jp': "メルメタル"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		'zh-tw': "壽命快到盡頭的時候， 身體就會生鏽解體。到最後 細小的碎片會復活為美錄坦。",
		'zh-cn': "壽命快到盡頭的時候， 身體就會生鏽解體。到最後 細小的碎片會復活為美錄坦。",
		'ja-jp': "寿命が 尽きると 体が 錆びて 崩れる。 やがて 小さな 破片が メルタンに 復活する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "砸碎",
			'zh-cn': "砸碎",
			'ja-jp': "たたきつぶす"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重塑斧",
			'zh-cn': "重塑斧",
			'ja-jp': "リモデルアックス"
		},

		effect: {
			'zh-tw': "在造成傷害前，將這隻寶可夢身上附加的「寶可夢道具」卡丟棄。若無法丟棄，則這個招式失敗。",
			'zh-cn': "在造成傷害前，將這隻寶可夢身上附加的「寶可夢道具」卡丟棄。若無法丟棄，則這個招式失敗。",
			'ja-jp': "ダメージを与える前に、このポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュできないなら、このワザは失敗。"
		},

		damage: 250,
		cost: ["Metal", "Colorless", "Colorless"]
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
				cardmarket: 779085,
				tcgplayer: 567926,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [809]
}

export default card