import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オラチフ",
		'zh-tw': "偶叫獒",
		'id-id': "Maschiff"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [942],
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "相手に 嘗められないように いつも しかめっ面をしているが 泣いている 子どもは その顔で 笑いだす。",
		'zh-tw': "為了不被對手看扁而總是皺著的那張臉，卻反而會 讓哭泣的孩子破涕為笑。",
		'id-id': "Agar tidak diremehkan oleh lawannya, Maschiff selalu memasang wajah seram, tetapi anak-anak yang menangis malah tertawa melihatnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "おそいかかる",
			'zh-tw': "伏擊",
			'id-id': "Menyergap"
		},

		damage: "10+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747649,
				tcgplayer: 567697,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card