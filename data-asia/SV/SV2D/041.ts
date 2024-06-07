import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグ",
		'zh-tw': "毒骷蛙",
		th: "โดคูร็อก",
		id: "Toxicroak"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [454],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "柔らかい 体で 相手の 攻撃を かわしながら ふところに 飛び込み 毒の トゲを 突き刺す。",
		'zh-tw': "會一邊靠柔軟的身體閃避攻擊，一邊往對手的懷裡衝過去， 然後用帶毒的尖刺猛戳。",
		th: "ใช้ความยืดหยุ่นของร่างกายในการหลบหลีกการโจมตีของศัตรูพลางหาโอกาสเข้าประชิด แล้วใช้เล็บพิษแทง",
		id: "Toxicroak lompat mendekat sambil menghindari serangan lawan dengan tubuhnya yang fleksibel, lalu menusuk lawan dengan duri beracun."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺",
			th: "แทง",
			id: "Melubangi"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "こぶしのトゲ",
			'zh-tw': "拳頭刺",
			th: "หมัดหนาม",
			id: "Duri Tinju"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card