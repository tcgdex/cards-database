import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アママイコ",
		'zh-tw': "甜舞妮",
		th: "อมามาอิโกะ",
		id: "Steenee"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [762],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "元気な 気持ちになれる 甘い 香りを 振りまく。 制汗剤の フレーバーとして 人気が 高い。",
		'zh-tw': "會散發出能振奮心情的香甜氣味。作為止汗劑 的香味擁有極高的人氣。",
		th: "โปรยกลิ่นหอมหวานที่ทำให้รู้สึกสดชื่น ผลิตภัณฑ์ระงับเหงื่อที่ใช้กลิ่นนี้ได้รับความนิยมสูงมาก",
		id: "Steenee menyebarkan aroma manis yang dapat membuat perasaan menjadi semangat. Aroma tersebut sangat populer sebagai aroma perasa antiperspiran."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アロマセラピー",
			'zh-tw': "芳香治療",
			th: "อโรมาเทอราปี",
			id: "Aromatherapy"
		},

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]",
			id: "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "はっぱカッター",
			'zh-tw': "飛葉快刀",
			th: "คัตเตอร์ใบไม้",
			id: "Daun Pemotong"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705241
	}
}

export default card