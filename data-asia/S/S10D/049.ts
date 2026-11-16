import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "オリジンディアルガVSTAR",
		'zh-tw': "起源帝牙盧卡VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Triple Rare",
	category: "Pokemon",
	dexId: [483],
	hp: 280,
	types: ["Metal"],

	evolveFrom: {
		ja: "オリジンディアルガV"
	},

	stage: "VSTAR",

	attacks: [{
		name: {
			ja: "メタルブラスト",
			'zh-tw': "金屬爆破"
		},

		effect: {
			ja: "このポケモンについている{M}エネルギーの数×40ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【鋼】能量的數量×40點傷害。"
		},

		damage: "40+",
		cost: ["Colorless"]
	}, {
		name: {
			ja: "スタークロノス",
			'zh-tw': "[VSTAR力量]星星柯羅諾斯"
		},

		effect: {
			ja: "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			'zh-tw': "這個回合結束後，再開始1次自己的回合。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651017,
				tcgplayer: 569804,
				cardtrader: 233695,
			},
		},
	]
}

export default card