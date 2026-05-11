import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキex",
		'zh-tw': "轟鳴月ex",
		th: "จันทร์คำรนex",
		ko: "고동치는달 ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "くるいえぐる",
			'zh-tw': "瘋癲攻擊",
			th: "วิปลาสเจาะทะลวง",
			ko: "사납게 도려내기"
		},

		effect: {
			ja: "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			'zh-tw': "將對手的戰鬥寶可夢【昏厥】。然後，這隻寶可夢受到200點傷害。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ] หลังจากนั้น ทำแดเมจ 200 กับโปเกมอนนี้",
			ko: "상대의 배틀 포켓몬을 기절시킨다. 그 뒤, 이 포켓몬에게 200데미지를 준다."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カラミティストーム",
			'zh-tw': "災厄風暴",
			th: "คาลามิตี้สตอร์ม",
			ko: "컬래머티스톰"
		},

		damage: "100+",

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			'zh-tw': "若希望，將場上的競技場卡丟棄。這個情況下，增加120點傷害。",
			th: "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			ko: "원한다면 필드에 나와 있는 스타디움을 트래쉬한다. 그 경우, 120데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card