import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 風速狗V",
		'th-th': "ฮิซุย วินดีV",
		'ja-jp': "ヒスイ ウインディV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "震怒奮鬥",
			'th-th': "สิงโตผยอง",
			'ja-jp': "ししふんじん"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的【鬥】能量，改附於這隻寶可夢身上。",
			'th-th': "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกพลังงาน[ต่อสู้]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนนี้",
			'ja-jp': "自分の番に何回でも使える。自分の場のポケモンについているエネルギーを1個選び、このポケモンにつけ替える。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "岩石子彈",
			'th-th': "ร็อกบูลเล็ต",
			'ja-jp': "ロックバレット"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【鬥】能量的數量×30點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงาน[ต่อสู้]ที่ติดอยู่กับโปเกมอนนี้ x30",
			'ja-jp': "このポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "90＋",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 680185,
				tcgplayer: 570104,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card