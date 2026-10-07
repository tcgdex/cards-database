import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "コリンク" },
	dexId: [404],
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "ルクシオ",
		'zh-tw': "勒克貓",
		th: "ลุคซิโอ"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 相手を気絶させる。",
		'zh-tw': "在銳利的爪子尖端有強烈的電流流過，只要稍微擦到，就能讓對手暈厥。",
		th: "ที่ปลายเล็บอันแหลมคมจะมีไฟฟ้าไหลผ่านอยู่ เพียงแค่เฉี่ยวโดนก็ทำให้ฝ่ายตรงข้ามหมดสติได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ジャンプキック",
			'zh-tw': "跳踢",
			th: "จัมป์คิก"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้าม 1 ตัว ได้รับแดเมจ 30 [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลท์"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533727, tcgplayer: 569072, cardtrader: 240036 } }
	]
}

export default card