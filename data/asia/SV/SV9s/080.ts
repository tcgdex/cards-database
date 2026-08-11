import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บันกิราส",
		'id-id': "Tyranitar"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	description: {
		'th-th': "มีพละกำลังขนาดเปลี่ยนธรณีสัณฐานรอบ ๆ ได้อย่างสบาย กล้าบ้าบิ่น ไม่หวั่นเกรงใคร",
		'id-id': "Tyranitar memiliki tenaga kuat yang dapat mengubah topografi di sekitarnya dengan mudah. Pokémon ini bersifat sombong yang tidak peduli akan sekitarnya."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ประกายตาขู่ขวัญ",
			'id-id': "Sinar Mata Represi"
		},

		effect: {
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ฝ่ายตรงข้ามไม่สามารถนำการ์ด ไอเท็มจากบนมือออกมาใช้ได้",
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, lawan tidak dapat memainkan Item dari Kartu Pegangan."
		}
	}],

	attacks: [{
		name: {
			'th-th': "แคร็กสตอมป์",
			'id-id': "Crack Stomp"
		},

		effect: {
			'th-th': "ทิ้งการ์ด 2 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Buang 2 kartu dari atas Deck lawan ke Trash."
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