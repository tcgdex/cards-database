import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒",
		th: "โอราทิฟ",
		id: "Maschiff"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
		'zh-tw': "為了不被對手看扁而總是皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。",
		th: "มักจะทำหน้านิ่วคิ้วขมวดเพื่อไม่ให้โดนอีกฝ่ายดูถูก แต่เด็กที่ร้องไห้จะหัวเราะเมื่อเห็นใบหน้านั้น",
		id: "Agar tidak diremehkan oleh musuhnya, Maschiff selalu memasang wajah seram, tetapi anak-anak yang menangis malah tertawa melihatnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			th: "ดีด",
			id: "Tendangan Penghempas"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม",
			id: "Taring Tajam"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card