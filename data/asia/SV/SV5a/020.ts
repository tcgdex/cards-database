import { Card } from "models/database/card"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シザリガー",
		'zh-tw': "鐵螯龍蝦",
		'th-th': "ชิซาริเกอร์"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [342],
	hp: 130,
	types: ["Water"],

	description: {
		'ja-jp': "巨大な ハサミを 振りまわす 暴れ者。 育てるのが とても 難しい ポケモンと いわれる。",
		'zh-tw': "不停揮舞自己巨大的鉗子， 是個性情粗暴的傢伙。 被認為是很難培育的寶可夢。",
		'th-th': "ทำตัวเป็นนักเลงโบกสะบัดก้ามยักษ์ไปมา ว่ากันว่าเป็นโปเกมอนที่เลี้ยงยากมาก"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "ジョキジョキ",
			'zh-tw': "喀嚓喀嚓",
			'th-th': "ฉับ ๆ"
		},

		damage: 40,

		effect: {
			'ja-jp': "コインを2回投げ、オモテの数ぶん、相手の山札を上からトラッシュする。",
			'zh-tw': "擲2次硬幣，將對手的牌庫上方與正面出現的次數相同數量的卡丟棄。",
			'th-th': "ทอยเหรียญ 2 ครั้ง ทิ้งการ์ดจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัวที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'ja-jp': "あばれハンマー",
			'zh-tw': "暴亂之錘",
			'th-th': "ค้อนคลั่ง"
		},

		damage: 180,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761480,
				tcgplayer: 566075,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
}

export default card