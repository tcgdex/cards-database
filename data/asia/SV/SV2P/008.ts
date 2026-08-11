import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アママイコ",
		'zh-tw': "甜舞妮",
		'th-th': "อมามาอิโกะ",
		'id-id': "Steenee"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [762],
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "元気な 気持ちになれる 甘い 香りを 振りまく。 制汗剤の フレーバーとして 人気が 高い。",
		'zh-tw': "會散發出能振奮心情的香甜氣味。作為止汗劑 的香味擁有極高的人氣。",
		'th-th': "โปรยกลิ่นหอมหวานที่ทำให้รู้สึกสดชื่น ผลิตภัณฑ์ระงับเหงื่อที่ใช้กลิ่นนี้ได้รับความนิยมสูงมาก",
		'id-id': "Steenee menyebarkan aroma manis yang dapat membuat perasaan menjadi semangat. Aroma tersebut sangat populer sebagai aroma perasa antiperspiran."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "アロマセラピー",
			'zh-tw': "芳香治療",
			'th-th': "อโรมาเทอราปี",
			'id-id': "Aromatherapy"
		},

		effect: {
			'ja-jp': "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]",
			'id-id': "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'ja-jp': "はっぱカッター",
			'zh-tw': "飛葉快刀",
			'th-th': "คัตเตอร์ใบไม้",
			'id-id': "Daun Pemotong"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705241,
				tcgplayer: 567765,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card