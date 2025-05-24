import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บันกิราส",
		id: "Tyranitar"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	description: {
		th: "มีพละกำลังขนาดเปลี่ยนธรณีสัณฐานรอบ ๆ ได้อย่างสบาย กล้าบ้าบิ่น ไม่หวั่นเกรงใคร",
		id: "Tyranitar memiliki tenaga kuat yang dapat mengubah topografi di sekitarnya dengan mudah. Pokémon ini bersifat sombong yang tidak peduli akan sekitarnya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "ประกายตาขู่ขวัญ",
			id: "Sinar Mata Represi"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ฝ่ายตรงข้ามไม่สามารถนำการ์ด ไอเท็มจากบนมือออกมาใช้ได้",
			id: "Selama Pokémon ini ada di Arena Bertarung, lawan tidak dapat memainkan Item dari Kartu Pegangan."
		}
	}],

	attacks: [{
		name: {
			th: "แคร็กสตอมป์",
			id: "Crack Stomp"
		},

		effect: {
			th: "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 2 kartu dari atas Deck lawan ke Trash."
		},

		damage: 150,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card