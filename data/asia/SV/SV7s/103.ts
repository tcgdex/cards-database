import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มาชิมาชิระex",
		id: "Munkidori ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "ผิดคาด",
			id: "Bikin Kecele"
		},

		effect: {
			th: "เมื่อโปเกมอนนี้ ได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว ถ้าบนกระดานฝ่ายเรามี [โมโมวาโร่【ex】] อยู่ การ์ดรางวัลที่หยิบได้จะลดลง 1 ใบ",
			id: "Jika ada Pecharunt {ex} di Arena sendiri saat Pokémon ini KO karena menerima kerusakan akibat serangan dari Pokémon lawan, Kartu Point yang diambil lawan berkurang 1 lembar."
		}
	}],

	attacks: [{
		name: {
			th: "เดอร์ตี้เฮด",
			id: "Dirty Headbutt"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เดอร์ตี้เฮด] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Dirty Headbutt."
		},

		damage: 190,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card