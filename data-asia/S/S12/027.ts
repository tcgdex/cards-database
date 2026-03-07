import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勒克貓",
		th: "ลุคซิโอ",
		ja: "ルクシオ"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "如果與夥伴尾巴牽尾巴，就能借用對方的電能， 然後發出更強的電擊。",
		th: "เมื่อผูกหางและแบ่งรับพลังงานไฟฟ้ามาจากพวกพ้องแล้ว ก็จะปล่อยไฟฟ้าช็อตได้รุนแรงขึ้น",
		ja: "しっぽを つなげて 仲間から 電気エネルギーを 分けてもらうと より 強い 電撃を 放てる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "短路電光",
			th: "ช็อตสปาร์ก",
			ja: "ショートスパーク"
		},

		effect: {
			'zh-tw': "對手的所有身上附有「寶可夢道具」的寶可夢各受到90點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้ามที่มี [ไอเท็มติดโปเกมอน] ติดอยู่ทุกตัว จะได้รับแดเมจตัวละ 90 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ja: "「ポケモンのどうぐ」がついている相手のポケモン全員に、それぞれ90ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "咬住",
			th: "กัดติด",
			ja: "かみつく"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [404],

	thirdParty: {
		cardmarket: 680166
	}
}

export default card