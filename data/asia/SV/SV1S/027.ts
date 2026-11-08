import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キルリア",
		'zh-tw': "奇魯莉安",
		'th-th': "เคอเรีย",
		'id-id': "Kirlia"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [281],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "サイコパワーを 操り まわりの 空間を ねじ曲げることで 未来を 見通すことができる。",
		'zh-tw': "能夠操縱精神力量來扭曲周圍的空間， 讓自己看見未來。",
		'th-th': "สามารถมองเห็นอนาคตได้โดยการบิดเบือนมิติรอบ ๆ ด้วยพลังจิต",
		'id-id': "Dengan membengkokkan dimensi ruang di sekitarnya menggunakan kekuatan psikokinesis, Kirlia dapat melihat masa depan."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "マジカルショット",
			'zh-tw': "魔法射擊",
			'th-th': "เมจิคัลช็อต",
			'id-id': "Magical Shot"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'ja-jp': "サイコキネシス",
			'zh-tw': "精神強念",
			'th-th': "ไซโคคิเนซิส",
			'id-id': "Psikis"
		},

		damage: "60+",

		effect: {
			'ja-jp': "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 692993,
				tcgplayer: 567144,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card