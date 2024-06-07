import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈",
		th: "สตรินเดอร์",
		ja: "ストリンダー"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "發電器官長在胸部。當牠製造出電力的時候， 會發出貝斯般的聲音。",
		th: "มีอวัยวะผลิตไฟฟ้าอยู่ที่หน้าอก เวลาผลิตไฟฟ้าจะมีเสียงทุ้ม ๆ คล้ายเบสก้องกังวาน",
		ja: "発電器官が 胸に ある。 電気が つくられるとき ベースのような 音が 響く。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "極度洩氣",
			th: "แมกซ์ดาวเนอร์",
			ja: "マックスダウナー"
		},

		effect: {
			'zh-tw': "若自己的所有場上寶可夢皆為「匯流」寶可夢則生效。只要這隻寶可夢在場上，對手的場上的所有「寶可夢【VMAX】」的最大HP各減少「30」。",
			th: "จะทำงาน ถ้าโปเกมอนบนกระดานฝ่ายเราทุกตัวเป็นโปเกมอน ตราบใดที่โปเกมอนนี้ยังอยู่ HP สูงสุดของ [โปเกมอน【VMAX】] บนกระดานฝ่ายตรงข้ามทุกตัว จะลดลงตัวละ [30]",
			ja: "自分の場のポケモン全員が「フュージョン」のポケモンなら、はたらく。このポケモンがいるかぎり、相手の場の「ポケモンVMAX」全員の最大HPは、それぞれ「30」小さくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลท์",
			ja: "ヘッドボルト"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [849]
}

export default card