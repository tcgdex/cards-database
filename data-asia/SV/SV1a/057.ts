import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "モノズ",
		'zh-tw': "單首龍",
		th: "โมโนซึ",
		id: "Deino"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [633],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "目が 見えないので なんでも とりあえず かじって 確かめる。 懐くまでは 傷だらけに なるぞ。",
		'zh-tw': "因為眼睛看不見，所以不管要確認什麼都是先咬再說。 和牠變親密前會滿身是傷。",
		th: "เพราะมองไม่เห็นก็เลยตรวจสอบด้วยการลองกัดมันไปเสียหมด กว่าจะเชื่องคงได้แผลเต็มตัวก่อน",
		id: "Deino menggigit segalanya untuk memastikan sekitarnya karena matanya tidak dapat melihat. Kamu akan penuh luka hingga ia menjadi jinak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "おそいかかる",
			'zh-tw': "伏擊",
			th: "ซุ่มโจมตี",
			id: "Menyergap"
		},

		damage: "20+",

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