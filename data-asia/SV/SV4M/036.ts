import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ナカヌチャン",
		'zh-tw': "巧鍛匠",
		th: "นาคานุจัง",
		ko: "벼리짱"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [958],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "金属の ガラクタ山が 棲み処。 ハンマーの 強度を 試すため 仲間同士で 激しく 打ち合う。",
		'zh-tw': "棲息在堆滿破銅爛鐵的地方。為了測試錘子的強度，會和夥伴們激烈地敲打彼此。",
		th: "อาศัยอยู่ที่ภูเขาเศษโลหะ จะตีกันเองในหมู่พวกพ้องเพื่อทดสอบความแข็งแกร่งของค้อน",
		ko: "금속으로 가득한 고철더미를 거처로 삼는다. 해머의 강도를 시험하기 위해 동료끼리 격렬하게 부딪친다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ごうきんスイング",
			'zh-tw': "合金橫掃",
			th: "กวัดแกว่งอัลลอย",
			ko: "합금스윙"
		},

		damage: "20+",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、40ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有【鋼】能量卡，則增加40點傷害。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[โลหะ]ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 40",
			ko: "이 포켓몬에게 (강철) 에너지가 붙어 있다면 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card