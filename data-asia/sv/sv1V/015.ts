import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ガーディ",
		'zh-tw': "卡蒂狗"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "人懐こく 誠実な 性格。 敵には ほえて かみつき 追い払おうとする。",
		'zh-tw': "性格誠實，容易和人親近。遇到敵人時牠會吼叫追咬， 試著把敵人趕走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もえあがる",
			'zh-tw': "燃起"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【火】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "ほのおのツメ",
			'zh-tw': "火之爪"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card