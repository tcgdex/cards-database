import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タケルライコex",
		'id-id': "Raging Bolt ex",
		'th-th': "ฟ้าคะนองคลั่งex",
		'zh-tw': "猛雷鼓ex",
		'zh-cn': "猛雷鼓ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はじけるほうこう",
			'id-id': "Letusan Raungan",
			'th-th': "เสียงคำรามระเบิด",
			'zh-tw': "濺射咆哮",
			'zh-cn': "濺射咆哮"
		},

		effect: {
			'ja-jp': "自分の手札をすべてトラッシュし、山札を6枚引く。",
			'id-id': "Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 6 kartu dari atas Deck.",
			'th-th': "ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด จั่วการ์ด 6 ใบจากสำรับการ์ด",
			'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出6張卡。",
			'zh-cn': "將自己的手牌全部丟棄，從牌庫抽出6張卡。"
		}
	}, {
		cost: ["Lightning", "Fighting"],

		name: {
			'ja-jp': "きょくらいごう",
			'id-id': "Guntur Membahana Ekstrem",
			'th-th': "ฟ้าคำรามสุดขีด",
			'zh-tw': "極降駕",
			'zh-cn': "極降駕"
		},

		damage: "70×",

		effect: {
			'ja-jp': "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。",
			'id-id': "Buang sesukanya Energi Dasar yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembarnya.",
			'th-th': "ทิ้งพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x70",
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的基本能量卡丟棄，造成其張數×70點傷害。",
			'zh-cn': "將自己的場上寶可夢身上附加的任意數量的基本能量卡丟棄，造成其張數×70點傷害。"
		}
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803237,
				tcgplayer: 602534,
			},
		},
	],

	retreat: 3,
	regulationMark: "H"
}

export default card