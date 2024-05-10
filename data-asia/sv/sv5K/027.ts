import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "マリルリ",
		'zh-tw': "瑪力露麗",
		th: "มาริลลิ",
		'zh-cn': "瑪力露麗"
	},

	illustrator: "Makura Tami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [184],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。",
		'zh-tw': "長長的耳朵是靈敏的感應器。能夠藉著聆聽水中的聲音 來分辨出是什麼在動。",
		th: "หูยาว ๆ เป็นเซนเซอร์ชั้นเยี่ยม สามารถแยกแยะเสียงในน้ำและระบุได้ว่าอะไรกำลังเคลื่อนไหว",
		'zh-cn': "長長的耳朵是靈敏的感應器。能夠藉著聆聽水中的聲音 來分辨出是什麼在動。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "じゃれつく",
			'zh-tw': "嬉鬧",
			th: "คลอเคลีย",
			'zh-cn': "嬉鬧"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			'zh-cn': "擲1次硬幣若為正面，則增加30點傷害。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "パワータックル",
			'zh-tw': "力量衝撞",
			th: "พาวเวอร์แท็กเกิล",
			'zh-cn': "力量衝撞"
		},

		damage: 140,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card