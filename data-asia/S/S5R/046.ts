import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "コジョフー" },
	dexId: [620],
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "コジョンド",
		'zh-tw': "師父鼬",
		th: "โคโจนโดะ"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "奇妙な声で 吠えたら 危険。 目にも止まらぬ キックや チョップの 連続攻撃が 始まるぞ。",
		'zh-tw': "當牠用奇妙聲音發出叫喊時是很危險的，由快到無法看清的踢腿和手刀組成的連續攻擊將接踵而來。",
		th: "เมื่อหอนด้วยเสียงประหลาดถือว่าอันตราย ลูกเตะและลูกสับจะเริ่มประโคมกันโจมตีมาอย่างต่อเนื่องขนาดที่จับตามองไม่ทันทีเดียว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はたく",
			'zh-tw': "拍擊",
			th: "ปัด"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "スピニングウィップ",
			'zh-tw': "旋轉鞭打",
			th: "สปินนิ่งวิป"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [สับสน] นำโปเกมอนนี้และการ์ดทั้งหมดที่ติดอยู่กลับไปในสำรับการ์ดฝ่ายเราแล้วสับ"
		},

		damage: 90,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533802, tcgplayer: 569087, cardtrader: 240055 } }
	]
}

export default card