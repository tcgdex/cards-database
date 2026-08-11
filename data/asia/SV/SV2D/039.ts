import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナマズン",
		'zh-tw': "鯰魚王",
		'th-th': "นามาซูน",
		'id-id': "Whiscash"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [340],
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "縄張り意識が とても 強く 外敵が 近づくと 激しく 地面を 揺らして 襲いかかる。",
		'zh-tw': "地盤意識非常強烈，如果有外敵靠近，就會 劇烈搖晃地面發動襲擊。",
		'th-th': "หวงอาณาเขตมาก พอศัตรูเข้ามาใกล้จะทำให้พื้นดินสั่นไหวรุนแรงแล้วจู่โจม",
		'id-id': "Whiscash sangat protektif dengan wilayah teritorialnya. Jika ada lawan yang mendekat dari luar, Pokémon ini menyerang dengan menggetarkan tanah secara kencang."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "あばれてゆらす",
			'zh-tw': "暴搖",
			'th-th': "อาละวาดสะเทือน",
			'id-id': "Mengamuk Menggoyahkan"
		},

		effect: {
			'ja-jp': "このポケモンについているエネルギーの数ぶん、相手の山札を上からトラッシュする。",
			'zh-tw': "將對手的牌庫上方與這隻寶可夢身上附加的【鬥】能量相同數量的卡丟棄。",
			'th-th': "ทิ้งการ์ดจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม ตามจำนวนพลังงาน[ต่อสู้]ที่ติดอยู่กับโปเกมอนนี้ที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang kartu dari atas Deck lawan ke Trash untuk tiap Energi {Petarung} yang dikenakan pada Pokémon ini."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ランドクラッシュ",
			'zh-tw': "大地粉碎",
			'th-th': "แลนด์ครัช",
			'id-id': "Land Crush"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705343,
				tcgplayer: 565901,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card