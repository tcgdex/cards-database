import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ",
		'zh-tw': "毛崖蟹",
		th: "กาเคกานิ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [950],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		'zh-tw': "會倒立在懸崖上等獵物上門，但由於那會讓牠的血液倒流， 因此等不了太長的時間。",
		th: "ยืนกลับหัวและเล็งเหยื่อจากยอดหน้าผา แต่ไม่สามารถเล็งได้นานเพราะเลือดลงหัว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ヒステリックシザー",
			'zh-tw': "歇斯底里之剪",
			th: "ฮิสทีริกซิสเซอร์"
		},

		damage: "30+",

		effect: {
			ja: "このポケモンが特殊状態なら、160ダメージ追加。",
			'zh-tw': "若這隻寶可夢處於特殊狀態，則增加160點傷害。",
			th: "ถ้าโปเกมอนนี้เป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 160"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ボイルドプレス",
			'zh-tw': "煮沸壓制",
			th: "อัดเดือด"
		},

		damage: 80,

		effect: {
			ja: "このポケモンをやけどにする。",
			'zh-tw': "將這隻寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[ไหม้]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card