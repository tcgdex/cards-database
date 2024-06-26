import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "サンドパン",
		'zh-tw': "穿山王",
		th: "แซนด์แพน"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Nisota Niso",
	dexId: [28],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "トゲは 皮膚が 硬くなったもの。 体を 丸めて トゲトゲを 刺すように 相手を 攻撃する。",
		'zh-tw': "身上的刺是皮膚硬化後形成的。 會將身體蜷成一團， 用尖刺刺向對手進行攻擊。",
		th: "หนามคือผิวหนังที่แข็งตัว ม้วนตัวกลมแล้วโจมตีศัตรูด้วยการใช้หนามทิ่มแทง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ツメをたてる",
			'zh-tw': "豎爪",
			th: "กางกรงเล็บ"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "じしん",
			'zh-tw': "地震",
			th: "แผ่นดินไหว"
		},

		damage: 120,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 10 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card