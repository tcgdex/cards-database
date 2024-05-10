import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ノノクラゲ",
		'zh-tw': "原野水母"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [948],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。",
		'zh-tw': "看起來像瑪瑙水母，其實是截然不同的種類。雖然腳很細，但跑起來能達到時速５０公里。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "くっつくほうし",
			'zh-tw': "附著孢子"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。",
			'zh-tw': "從自己的手牌選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "つるでうつ",
			'zh-tw': "藤蔓攻擊"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card