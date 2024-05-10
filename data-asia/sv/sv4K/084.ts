import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキex",
		th: "จันทร์คำรนex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "くるいえぐる",
			th: "วิปลาสเจาะทะลวง"
		},

		effect: {
			ja: "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ] หลังจากนั้น ทำแดเมจ 200 กับโปเกมอนนี้"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カラミティストーム",
			th: "คาลามิตี้สตอร์ม"
		},

		damage: "100+",

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			th: "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้นแล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 120"
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