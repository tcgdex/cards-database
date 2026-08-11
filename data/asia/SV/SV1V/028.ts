import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ジバコイルex",
		'zh-tw': "自爆磁怪ex",
		'th-th': "จิบะคอยล์ex",
		'id-id': "Magnezone ex"
	},

	illustrator: "hncl",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'ja-jp': "エナジークラッシュ",
			'zh-tw': "能量粉碎",
			'th-th': "เอนเนอร์จี้ครัช",
			'id-id': "Energy Crush"
		},

		damage: "50×",

		effect: {
			'ja-jp': "相手のポケモン全員についているエネルギーの数×50ダメージ。",
			'zh-tw': "造成對手的所有寶可夢身上附加的能量的數量×50點傷害。",
			'th-th': "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว x50",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 50 untuk tiap Energi yang dikenakan pada semua Pokémon lawan."
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'ja-jp': "パルスランチャー",
			'zh-tw': "脈衝發射器",
			'th-th': "พัลส์ลอนเชอร์",
			'id-id': "Pulse Launcher"
		},

		damage: 220,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693103,
				tcgplayer: 568254,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card