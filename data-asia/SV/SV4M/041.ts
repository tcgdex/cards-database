import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ハガネール",
		'zh-tw': "大鋼蛇",
		th: "ฮากาเนล",
		ko: "강철톤"
	},

	illustrator: "Po-Suzuki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "土と 一緒に 飲みこんだ 鉄分が 溜まっていって 体が 変化したとも 考えられる。",
		'zh-tw': "人們認為牠的身體是因為堆積了和泥土一起吞下的鐵質，才會發生變化的。",
		th: "สันนิษฐานได้อีกอย่างหนึ่งว่าธาตุเหล็กที่กินเข้าไปพร้อมกับดินนั้นสะสมจนร่างกายของมันเปลี่ยนรูปไป",
		ko: "흙과 함께 삼킨 강철이 축적되어 몸이 변화한 것이라 여겨지고 있다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "じしん",
			'zh-tw': "地震",
			th: "แผ่นดินไหว",
			ko: "지진"
		},

		damage: 130,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "자신의 벤치 포켓몬 전원에게도 각각 30데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊",
			th: "เฮฟวีอิมแพกต์",
			ko: "헤비임팩트"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741868
	}
}

export default card