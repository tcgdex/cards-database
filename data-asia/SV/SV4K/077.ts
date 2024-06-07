import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アラブルタケ",
		th: "เห็ดคลุ้มคลั่ง"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	dexId: [986],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。",
		th: "มีความเป็นไปได้ว่าโปเกมอนตัวนี้คือสิ่งมีชีวิตที่เรียกว่าเห็ดคลุ้มคลั่งซึ่งถูกระบุไว้ในหนังสือเล่มหนึ่ง"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もうどくふんじん",
			th: "ผงฝุ่นพิษร้ายแรง"
		},

		effect: {
			ja: "このポケモンに「ブーストエナジー 古代」がついているなら、自分の番に1回使える。おたがいのバトルポケモンを、それぞれどくにする。",
			th: "ถ้าโปเกมอนนี้มี [บูสต์เอนเนอร์จี้ โบราณ] ติดอยู่ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ[พิษ]"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "あばれハンマー",
			th: "ค้อนคลั่ง"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card