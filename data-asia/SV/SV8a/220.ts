import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーフゴーex",
		id: "Gholdengo ex",
		'zh-tw': "賽富豪ex",
		'zh-cn': "賽富豪ex"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ボーナスコイン",
			id: "Bonus Coin",
			'zh-tw': "紅利硬幣",
			'zh-cn': "紅利硬幣"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を1枚引く。このポケモンがバトル場にいるなら、さらに1枚引く。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Ambil 1 kartu dari atas Deck sendiri. Jika Pokémon ini ada di Arena Bertarung, ambil lagi 1 kartu tambahan.",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫抽出1張卡。若這隻寶可夢在戰鬥場上，則再抽出1張卡。",
			'zh-cn': "在自己的回合時可使用1次。從自己的牌庫抽出1張卡。若這隻寶可夢在戰鬥場上，則再抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "ゴールドラッシュ",
			id: "Terjangan Emas",
			'zh-tw': "淘金潮",
			'zh-cn': "淘金潮"
		},

		damage: "50×",

		effect: {
			ja: "自分の手札から基本エネルギーを好きなだけトラッシュし、その枚数×50ダメージ。",
			id: "Buang sesukanya Energi Dasar dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya.",
			'zh-tw': "從自己的手牌將任意數量的基本能量卡丟棄，造成其張數×50點傷害。",
			'zh-cn': "從自己的手牌將任意數量的基本能量卡丟棄，造成其張數×50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card