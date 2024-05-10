import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ズピカ",
		'zh-tw': "光蚪仔"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [938],
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "尻尾を 振って 発電する。 危険を 感じると 頭を 点滅させて 仲間に 伝える。",
		'zh-tw': "會搖尾巴來發電。感覺到有危險時，會閃爍頭部通知夥伴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "たいでん",
			'zh-tw': "帶電"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ピッカリだま",
			'zh-tw': "光彈"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card