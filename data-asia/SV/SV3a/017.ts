import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "デンチュラ",
		'zh-tw': "電蜘蛛",
		th: "เดนทูลา"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [596],
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "飛ぶのが ヘタな ヒナを 狙い 鳥ポケモンの 巣の 近くに 電気の 糸で 罠を 張るぞ。",
		'zh-tw': "為了捕捉不太會飛的幼鳥，會在鳥寶可夢的巢穴附近 用帶電的絲設下陷阱。",
		th: "วางกับดักด้ายไฟฟ้าไว้ใกล้ ๆ รังของโปเกมอนนก เล็งลูกนกที่บินไม่เก่งเป็นเหยื่อ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "エレキバレット",
			'zh-tw': "電氣子彈",
			th: "อิเล็กโทรบูลเล็ต"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734256
	}
}

export default card