import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "フリーザー",
		'zh-tw': "急凍鳥",
		'zh-cn': "急凍鳥"
	},

	illustrator: "Takumi Wada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [144],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "氷を 自在に 操る 力を もつ。 永久凍土の 雪山に 棲んでいるという。",
		'zh-tw': "擁有能自在操縱冰的 能力。據說是棲息在 永凍之地的雪山中。",
		'zh-cn': "擁有能自在操縱冰的 能力。據說是棲息在 永凍之地的雪山中。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つめたいはばたき",
			'zh-tw': "冰冷羽擊",
			'zh-cn': "冰冷羽擊"
		},

		effect: {
			ja: "自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張「基本【水】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張「基本【水】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アイスブラスト",
			'zh-tw': "冰之爆破",
			'zh-cn': "冰之爆破"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card