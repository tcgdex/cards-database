import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "シザリガー",
		'zh-tw': "鐵螯龍蝦",
		th: "ชิซาริเกอร์"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [342],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "巨大な ハサミを 振りまわす 暴れ者。 育てるのが とても 難しい ポケモンと いわれる。",
		'zh-tw': "不停揮舞自己巨大的鉗子， 是個性情粗暴的傢伙。 被認為是很難培育的寶可夢。",
		th: "ทำตัวเป็นนักเลงโบกสะบัดก้ามยักษ์ไปมา ว่ากันว่าเป็นโปเกมอนที่เลี้ยงยากมาก"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ジョキジョキ",
			'zh-tw': "喀嚓喀嚓",
			th: "ฉับ ๆ"
		},

		damage: 40,

		effect: {
			ja: "コインを2回投げ、オモテの数ぶん、相手の山札を上からトラッシュする。",
			'zh-tw': "擲2次硬幣，將對手的牌庫上方與正面出現的次數相同數量的卡丟棄。",
			th: "ทอยเหรียญ 2 ครั้ง ทิ้งการ์ดจากด้านบนของสำรับการ์ดฝ่ายตรงข้าม ตามจำนวนครั้งที่ออกหัวที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "あばれハンマー",
			'zh-tw': "暴亂之錘",
			th: "ค้อนคลั่ง"
		},

		damage: 180,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card