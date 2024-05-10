import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スピアー",
		'zh-tw': "大針蜂"
	},

	illustrator: "nisimono",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "集団で 現れることもある。 猛スピードで 飛び回り お尻の 毒針で 刺しまくる。",
		'zh-tw': "有時會成群結隊地出現。 能以極快的速度飛來飛去， 並用尾部的毒針不斷刺擊對手。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぎゃっきょうニードル",
			'zh-tw': "逆境尖刺"
		},

		damage: "30+",

		effect: {
			ja: "自分の手札が1枚もないなら、120ダメージ追加し、相手のバトルポケモンをどくとマヒにする。",
			'zh-tw': "若自己1張手牌都沒有，則增加120點傷害，並將對手的戰鬥寶可夢【中毒】與【麻痺】。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card