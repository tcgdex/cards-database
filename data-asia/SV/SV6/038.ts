import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン いどのめんex",
		'zh-tw': "厄鬼椪 水井面具ex",
		th: "โอการ์ปอง หน้ากากบ่อน้ำex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すすりなく",
			'zh-tw': "啜泣",
			th: "สะอึกสะอื้น"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "げきりゅうポンプ",
			'zh-tw': "激流水泵",
			th: "ปั๊มพ์น้ำเชี่ยว"
		},

		damage: 100,

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを3個選び、山札にもどして切る。その場合、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "若希望，選擇3個這隻寶可夢身上附加的能量，放回牌庫並重洗。這個情況下，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ใส่กลับไปในสำรับการ์ดแล้วสับ เมื่อทำเช่นนั้นแล้ว โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 120 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card