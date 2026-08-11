import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "トドロクツキex",
		'th-th': "จันทร์คำรนex",
		'ko-kr': "고동치는달 ex"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "くるいえぐる",
			'th-th': "วิปลาสเจาะทะลวง",
			'ko-kr': "사납게 도려내기"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ] หลังจากนั้น ทำแดเมจ 200 กับโปเกมอนนี้",
			'ko-kr': "상대의 배틀 포켓몬을 기절시킨다. 그 뒤, 이 포켓몬에게 200데미지를 준다."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'ja-jp': "カラミティストーム",
			'th-th': "คาลามิตี้สตอร์ม",
			'ko-kr': "컬래머티스톰"
		},

		damage: "100+",

		effect: {
			'ja-jp': "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			'th-th': "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'ko-kr': "원한다면 필드에 나와 있는 스타디움을 트래쉬한다. 그 경우, 120데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741511,
				tcgplayer: 565845,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card