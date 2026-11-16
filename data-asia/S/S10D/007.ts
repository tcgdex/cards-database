import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ドレディアV",
		'zh-tw': "洗翠 裙兒小姐V"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [549],
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "まいおどる",
			'zh-tw': "跳舞"
		},

		effect: {
			ja: "自分の手札が6枚になるように、山札を引く。",
			'zh-tw': "從牌庫抽卡直到自己的手牌滿6張為止。"
		},

		cost: []
	}, {
		name: {
			ja: "リーフステップ",
			'zh-tw': "綠葉舞步"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650967,
				tcgplayer: 569762,
				cardtrader: 234073,
			},
		},
	]
}

export default card