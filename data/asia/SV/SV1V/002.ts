import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヘラクロス",
		'zh-tw': "赫拉克羅斯",
		'th-th': "เฮราครอส",
		'id-id': "Heracross"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [214],
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "ものすごい 怪力の 持ち主。 自分の 体重の １００倍の 重さでも 楽に ぶん投げる。",
		'zh-tw': "擁有十分驚人的怪力。就連重量是自己體重１００倍的 物體也能輕鬆扔飛。",
		'th-th': "มีพละกำลังมหาศาลมาก สามารถโยนของที่หนักกว่าตัวเอง 100 เท่าได้อย่างสบาย ๆ",
		'id-id': "Pokémon yang memiliki tenaga super. Heracross dapat membanting benda yang lebih berat 100 kali lipat dari berat badannya dengan mudah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "かいりきなげ",
			'zh-tw': "怪力上投",
			'th-th': "จอมพลังขว้าง",
			'id-id': "Bantingan Tenaga Super"
		},

		damage: "10+",

		effect: {
			'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานสำหรับ[หนี]ของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "つのでつく",
			'zh-tw': "角撞",
			'th-th': "เขาขวิด",
			'id-id': "Tusukan Tanduk"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693076,
				tcgplayer: 568228,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card