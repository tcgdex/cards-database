import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シェイミ",
		'zh-tw': "謝米",
		'th-th': "เชมิน",
		'ko-kr': "쉐이미",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。",
		'zh-tw': "有著能分解大氣中的毒素，並將荒蕪的大地瞬間 變成一片花圃的力量。",
		'th-th': "มีพลังแยกสลายสารพิษในชั้นบรรยากาศ เปลี่ยนผืนดินที่แห้งแล้งให้เป็นทุ่งดอกไม้ในชั่วพริบตา",
		'ko-kr': "대기의 독소를 분해해서 거칠어진 대지를 일순간에 꽃밭으로 만드는 힘을 가지고 있다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ピンポイントダイブ",
				'zh-tw': "精刺奇襲",
				'th-th': "ดำดิ่งตรงเป้า",
				'ko-kr': "핀포인트 다이브",
			},
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のベンチの「ポケモンex・V」1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的備戰區的1隻「寶可夢【ex】・【V】」受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
				'th-th': "ทำแดเมจ 60 กับ [โปเกมอน【ex】 /【V】] บนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				'ko-kr': "상대 벤치의 「포켓몬 ex・V」 1마리에게 60데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)",
			},
		},
		{
			name: {
				'ja-jp': "うしろげり",
				'zh-tw': "後踢",
				'th-th': "เตะกลับหลัง",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752748,
				tcgplayer: 568340,
			},
		},
	],

	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [492],
};

export default card;
