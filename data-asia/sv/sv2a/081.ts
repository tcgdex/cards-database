import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コイル",
		'zh-tw': "小磁怪",
		th: "คอยล์",
		id: "Magnemite"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "左右にある ユニットから だす 電磁波で 重力を さえぎって 空に 浮かぶのだ。",
		'zh-tw': "從左右兩邊的組件發出的電磁波能阻礙重力， 使牠浮在空中。",
		th: "ลอยบนท้องฟ้าโดยไม่สนใจแรงโน้มถ่วงได้ด้วยคลื่นแม่เหล็กไฟฟ้าที่ปล่อยออกมาจากชิ้นส่วนซ้ายขวาของตน",
		id: "Dengan gelombang elektromagnetik yang dikeluarkan dari unit yang ada di sisi kiri dan kanannya, Magnemite melawan arus gravitasi dan melayang di udara."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "プチでんき",
			'zh-tw': "小電氣",
			th: "กระแสไฟน้อยนิด",
			id: "Listrik Mini"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ばくはつ",
			'zh-tw': "爆炸",
			th: "ระเบิด",
			id: "Ledakan"
		},

		damage: 60,

		effect: {
			ja: "このポケモンにも60ダメージ。",
			'zh-tw': "這隻寶可夢也受到60點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 60 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 60."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card