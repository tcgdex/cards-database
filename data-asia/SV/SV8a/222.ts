import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "タケルライコex",
		id: "Raging Bolt ex",
		'zh-tw': "猛雷鼓ex",
		'zh-cn': "猛雷鼓ex"
	},

	illustrator: "Uninori",
	rarity: "None",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はじけるほうこう",
			id: "Letusan Raungan",
			'zh-tw': "濺射咆哮",
			'zh-cn': "濺射咆哮"
		},

		effect: {
			ja: "自分の手札をすべてトラッシュし、山札を6枚引く。",
			id: "Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 6 kartu dari atas Deck.",
			'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出6張卡。",
			'zh-cn': "將自己的手牌全部丟棄，從牌庫抽出6張卡。"
		}
	}, {
		cost: ["Lightning", "Fighting"],

		name: {
			ja: "きょくらいごう",
			id: "Guntur Membahana Ekstrem",
			'zh-tw': "極降駕",
			'zh-cn': "極降駕"
		},

		damage: "70×",

		effect: {
			ja: "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。",
			id: "Buang sesukanya Energi Dasar yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembarnya.",
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的基本能量卡丟棄，造成其張數×70點傷害。",
			'zh-cn': "將自己的場上寶可夢身上附加的任意數量的基本能量卡丟棄，造成其張數×70點傷害。"
		}
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card