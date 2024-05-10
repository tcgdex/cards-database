import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グラードン",
		'zh-tw': "固拉多"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [383],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "カイオーガと 死闘の末 長い 眠りに ついた。大地の 化身と 言われる 伝説の ポケモン。",
		'zh-tw': "與蓋歐卡殊死戰鬥後， 便一直沉睡著。 被稱為大地化身的傳說的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "みなぎるちから",
			'zh-tw': "充溢之力"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、自分のポケモンにつける。",
			'zh-tw': "從自己的手牌選擇1張「基本【鬥】能量」卡，附於自己的寶可夢身上。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マグマパージ",
			'zh-tw': "熔岩光芒"
		},

		damage: "60×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを4枚までトラッシュし、その枚数×60ダメージ。",
			'zh-tw': "將最多4張自己的場上寶可夢身上附加的能量卡丟棄，造成其張數×60點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card