import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒",
		th: "โอราทิฟ",
		id: "Maschiff"
	},

	illustrator: "DOM",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
		'zh-tw': "為了不被對手看扁而總是皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。",
		th: "มักจะทำหน้านิ่วคิ้วขมวดเพื่อไม่ให้โดนอีกฝ่ายดูถูก แต่เด็กที่ร้องไห้จะหัวเราะเมื่อเห็นใบหน้านั้น",
		id: "Agar tidak diremehkan oleh musuhnya, Maschiff selalu memasang wajah seram, tetapi anak-anak yang menangis malah tertawa melihatnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "おそいかかる",
			'zh-tw': "伏擊",
			th: "ซุ่มโจมตี",
			id: "Menyergap"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card