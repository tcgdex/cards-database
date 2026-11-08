import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "プラスル",
		'zh-tw': "正電拍拍",
		'th-th': "พราเซิล"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [311],
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "電柱から 電気を 吸い取る。 体に ためた 電気を ショートさせて 音を 出す。",
		'zh-tw': "能從電線桿上吸取電力。 會透過讓體內儲存的 電流短路來發出聲音。",
		'th-th': "ดูดซับไฟฟ้าจากเสาไฟฟ้า ทำให้ไฟฟ้าที่สะสมในร่างกายลัดวงจรและส่งเสียงออกมา"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ダメージプラス",
			'zh-tw': "傷害正電",
			'th-th': "แดเมจพลัส"
		},

		damage: "10+",

		effect: {
			'ja-jp': "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734253,
				tcgplayer: 566872,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card