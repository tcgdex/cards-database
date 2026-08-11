import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ガチグマ アカツキex",
		'zh-tw': "月月熊 赫月 ex",
		'th-th': "กาจิกุมะ พระจันทร์สีเลือดex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ろうれんのわざ",
			'zh-tw': "老練招式",
			'th-th': "ทักษะเจนจัด"
		},

		effect: {
			'ja-jp': "相手がすでにとったサイドの枚数ぶん、このポケモンが「ブラッドムーン」を使うためのエネルギーは少なくなる。",
			'zh-tw': "這隻寶可夢使用「血月」所需的【無】能量，減少對手已經獲得的獎賞卡的張數數量。",
			'th-th': "พลังงาน[ไร้สี]สำหรับใช้ [บลัดมูน] ของโปเกมอนนี้จะลดลง ตามจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ブラッドムーン",
			'zh-tw': "血月",
			'th-th': "บลัดมูน"
		},

		damage: 240,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
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
				cardmarket: 761512,
				tcgplayer: 566107,
			},
		},
	],

	retreat: 3,
	regulationMark: "H"
}

export default card