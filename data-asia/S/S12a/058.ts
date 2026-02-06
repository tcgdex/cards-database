import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "彷徨夜靈",
		th: "ซามาโยรุ",
		ja: "サマヨール"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "身體內部是空的。只要一張開嘴就會像 黑洞一樣吸入所有東西。",
		th: "ภายในร่างกายว่างเปล่า เมื่ออ้าปากจะเกิดเป็นหลุมดำที่ไม่ว่าอะไรก็สูบเข้าไปได้",
		ja: "体の 中は 空っぽ。 口を 開けると ブラックホールの ように なんでも 吸いこんでしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "漆黑",
			th: "ความมืดมน",
			ja: "あんこく"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [356],

	thirdParty: {
		cardmarket: 687538
	}
}

export default card