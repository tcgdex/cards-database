import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "イッカネズミex",
		'th-th': "อิกคาเนซูมิex",
		'ko-kr': "파밀리쥐 ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "いっちだんけつ",
			'th-th': "น้ำหนึ่งใจเดียว",
			'ko-kr': "일치단결"
		},

		effect: {
			'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の場の「ワッカネズミ」と「イッカネズミ（『ポケモンex』をふくむ）」の数×3個ぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'th-th': "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวน [วักคาเนซูมิ] และ [อิกคาเนซูมิ (รวม [โปเกมอน【ex】])] บนกระดานฝ่ายเรา x3 ตัว",
			'ko-kr': "이 포켓몬이 배틀필드에서 상대의 포켓몬으로부터 기술의 데미지를 받았을 때 자신의 필드의 「두리쥐」와 「파밀리쥐(『포켓몬 ex』 포함)」의 수 × 3개만큼의 데미지 카운터를 기술을 사용한 포켓몬에게 올린다."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "がっつくまえば",
			'th-th': "ฟันหน้าจอมตะกละ",
			'ko-kr': "걸신앞니"
		},

		damage: 120,

		effect: {
			'ja-jp': "自分の山札を2枚引く。",
			'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'ko-kr': "자신의 덱을 2장 뽑는다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741911,
				tcgplayer: 566044,
			},
		},
	],

	retreat: 0,
	regulationMark: "G"
}

export default card