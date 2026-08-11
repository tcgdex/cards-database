import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オラチフ",
		'zh-tw': "偶叫獒",
		'th-th': "โอราทิฟ",
		'id-id': "Maschiff"
	},

	illustrator: "DOM",
	category: "Pokemon",
	dexId: [942],
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
		'zh-tw': "為了不被對手看扁而總是皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。",
		'th-th': "มักจะทำหน้านิ่วคิ้วขมวดเพื่อไม่ให้โดนอีกฝ่ายดูถูก แต่เด็กที่ร้องไห้จะหัวเราะเมื่อเห็นใบหน้านั้น",
		'id-id': "Agar tidak diremehkan oleh lawannya, Maschiff selalu memasang wajah seram, tetapi anak-anak yang menangis malah tertawa melihatnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "おそいかかる",
			'zh-tw': "伏擊",
			'th-th': "ซุ่มโจมตี",
			'id-id': "Menyergap"
		},

		damage: "10+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
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
				cardmarket: 746507,
				tcgplayer: 567526,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577365,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card