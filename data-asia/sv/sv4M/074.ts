import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ハガネール",
		th: "ฮากาเนล"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	dexId: [208],
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "土と 一緒に 飲みこんだ 鉄分が 溜まっていって 体が 変化したとも 考えられる。",
		th: "สันนิษฐานได้อีกอย่างหนึ่งว่าธาตุเหล็กที่กินเข้าไปพร้อมกับดินนั้นสะสมจนร่างกายของมันเปลี่ยนรูปไป"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "じしん",
			th: "แผ่นดินไหว"
		},

		damage: 130,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			th: "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			th: "เฮฟวีอิมแพกต์"
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
	regulationMark: "G"
}

export default card