import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ฮาซึเบรโร",
		id: "Lombre"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		th: "ในตำนานเก่าแก่ของคิตาคามิกล่าวว่า เด็กที่ซุกซนได้ไปเกิดใหม่เป็น โปเกมอน",
		id: "Terdapat legenda kuno dari Kitakami yang mencatat bahwa ia merupakan Pokémon reinkarnasi anak kecil yang suka jahil."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "อควาสแลช",
			id: "Aqua Slash"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card