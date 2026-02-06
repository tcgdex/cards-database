import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "シェイミ",
		'zh-tw': "謝米",
		th: "เชมิน"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [492],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。",
		'zh-tw': "有著能分解大氣中的毒素，並將荒蕪的大地瞬間 變成一片花圃的力量。",
		th: "มีพลังแยกสลายสารพิษในชั้นบรรยากาศ เปลี่ยนผืนดินที่แห้งแล้งให้เป็นทุ่งดอกไม้ในชั่วพริบตา"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ピンポイントダイブ",
			'zh-tw': "精刺奇襲",
			th: "ดำดิ่งตรงเป้า"
		},

		effect: {
			ja: "相手のベンチの「ポケモンex・V」1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的備戰區的1隻「寶可夢【ex】・【V】」受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 60 กับ [โปเกมอน【ex】 /【V】] บนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うしろげり",
			'zh-tw': "後踢",
			th: "เตะกลับหลัง"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752748
	}
}

export default card