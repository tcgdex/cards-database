import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン いどのめんex",
		id: "Ogerpon Topeng Sumur ex",
		th: "โอการ์ปอง หน้ากากบ่อน้ำex",
		'zh-tw': "厄鬼椪 水井面具ex",
		'zh-cn': "厄鬼椪 水井面具ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "すすりなく",
			id: "Menangis Sesenggukan",
			th: "สะอึกสะอื้น",
			'zh-tw': "啜泣",
			'zh-cn': "啜泣"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "げきりゅうポンプ",
			id: "Pompa Arus Deras",
			th: "ปั๊มพ์น้ำเชี่ยว",
			'zh-tw': "激流水泵",
			'zh-cn': "激流水泵"
		},

		damage: 100,

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを3個選び、山札にもどして切る。その場合、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Pemain dapat memilih 3 Energi yang dikenakan pada Pokémon ini, lalu mengocoknya kembali ke Deck. Jika dilakukan, serangan ini juga memberikan kerusakan sejumlah 120 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ใส่กลับไปในสำรับการ์ดแล้วสับ เมื่อทำเช่นนั้นแล้ว โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 120 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'zh-tw': "若希望，選擇3個這隻寶可夢身上附加的能量，放回牌庫並重洗。這個情況下，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "若希望，選擇3個這隻寶可夢身上附加的能量，放回牌庫並重洗。這個情況下，對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
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