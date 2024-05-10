import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ロゼリア",
		'zh-tw': "毒薔薇",
		th: "โรเซเลีย"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [315],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "花の 香りを かぐと 気持ちが リラックスする。 香りの 強い ロゼリアは 元気な 証拠。",
		'zh-tw': "只要聞到牠的花香，就能放鬆心情。濃郁的香味 是毒薔薇有活力的證明。",
		th: "เมื่อดมกลิ่นหอมของดอกไม้จะรู้สึกผ่อนคลาย โรเซเลียที่มีกลิ่นหอมแรงคือหลักฐานว่าสบายดี"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのトゲ",
			'zh-tw': "毒刺",
			th: "หนามพิษ"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【中毒】。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม ทำให้โปเกมอนที่ใช้ท่าต่อสู้เป็นสภาวะ[พิษ]"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "リーフステップ",
			'zh-tw': "綠葉舞步",
			th: "ลีฟสเต็ป"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card