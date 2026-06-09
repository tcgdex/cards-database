import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ロゼリア",
		'zh-tw': "毒薔薇",
		th: "โรเซเลีย",
		ko: "로젤리아"
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
		th: "เมื่อดมกลิ่นหอมของดอกไม้จะรู้สึกผ่อนคลาย โรเซเลียที่มีกลิ่นหอมแรงคือหลักฐานว่าสบายดี",
		ko: "꽃향기를 맡으면 기분이 편안해진다. 향이 강하면 건강한 로젤리아라는 뜻이다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのトゲ",
			'zh-tw': "毒刺",
			th: "หนามพิษ",
			ko: "독가시"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【中毒】。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม ทำให้โปเกมอนที่ใช้ท่าต่อสู้เป็นสภาวะ[พิษ]",
			ko: "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 기술을 사용한 포켓몬을 독으로 만든다."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "リーフステップ",
			'zh-tw': "綠葉舞步",
			th: "ลีฟสเต็ป",
			ko: "리프스텝"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752743
	}
}

export default card