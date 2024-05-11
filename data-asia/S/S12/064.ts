import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目",
		th: "กาลาร์ เนียคิง",
		ja: "ガラル ニャイキング"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "有著十分好戰的性格。頭上像鐵頭盔一樣的東西 其實是牠硬化後的體毛。",
		th: "ขนบนศีรษะกลายสภาพแข็งราวกับหมวกกันน็อกเหล็ก มีนิสัยรักการต่อสู้มาก",
		ja: "頭の 体毛が 硬質化して 鉄の ヘルメットのように なった。 とても 好戦的な 性質。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "銳利之爪",
			th: "กรงเล็บคม",
			ja: "するどいツメ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 60",
			ja: "コインを1回投げオモテなら、60ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "劈開",
			th: "ฟันแหลก",
			ja: "きりさく"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [863]
}

export default card