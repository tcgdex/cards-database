import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "ルクシオ" },
	dexId: [405],
	rarity: "Rare",
	set: Set,

	name: {
		ja: "レントラー",
		'zh-tw': "倫琴貓",
		th: "เร็นโทรา"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "レントラーの 透視能力は 危険な ものを 発見するとき とても 役に立つのだ。",
		'zh-tw': "倫琴貓的透視能力在發現危險事物時非常有幫助。",
		th: "พลังมองทะลุวัตถุของเร็นโทรามีประโยชน์มากเวลาค้นหาสิ่งอันตราย"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "エレキステップ",
			'zh-tw': "電氣舞步",
			th: "อิเล็กทริกสเต็ป"
		},

		effect: {
			ja: "相手のポケモン1匹に、40ダメージ。このポケモンをベンチポケモンと入れ替える。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到40點傷害。將這隻寶可夢與備戰寶可夢互換。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 40 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]"
		},

		cost: ["Lightning"]
	}, {
		name: {
			ja: "スカービート",
			'zh-tw': "傷疤律動",
			th: "สการ์บีท"
		},

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、100ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加100點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		},

		damage: "100+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533732, tcgplayer: 569073, cardtrader: 240037 } }
	]
}

export default card