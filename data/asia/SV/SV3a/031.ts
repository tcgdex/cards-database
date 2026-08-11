import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ガケガニ",
		'zh-tw': "毛崖蟹",
		'th-th': "กาเคกานิ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [950],
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
		'zh-tw': "會倒立在懸崖上等獵物上門，但由於那會讓牠的血液倒流， 因此等不了太長的時間。",
		'th-th': "ยืนกลับหัวและเล็งเหยื่อจากยอดหน้าผา แต่ไม่สามารถเล็งได้นานเพราะเลือดลงหัว"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ヒステリックシザー",
			'zh-tw': "歇斯底里之剪",
			'th-th': "ฮิสทีริกซิสเซอร์"
		},

		damage: "30+",

		effect: {
			'ja-jp': "このポケモンが特殊状態なら、160ダメージ追加。",
			'zh-tw': "若這隻寶可夢處於特殊狀態，則增加160點傷害。",
			'th-th': "ถ้าโปเกมอนนี้เป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 160"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "ボイルドプレス",
			'zh-tw': "煮沸壓制",
			'th-th': "อัดเดือด"
		},

		damage: 80,

		effect: {
			'ja-jp': "このポケモンをやけどにする。",
			'zh-tw': "將這隻寶可夢【灼傷】。",
			'th-th': "ทำให้โปเกมอนนี้เป็นสภาวะ[ไหม้]"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734270,
				tcgplayer: 566889,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card