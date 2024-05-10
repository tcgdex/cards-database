import { Card } from "../../../interfaces"
import Set from "../svAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "纏紅鶴",
		th: "คลามิงโก้",
		id: "Flamigo"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有被稱為同步的習性，因此攻擊時整個群體會 有條不紊地一起衝過來。",
		th: "เนื่องจากมีพฤติกรรมที่เรียกว่าซิงโคร ทุกตัวในฝูงจะโจมตีพร้อมกันอย่างเป็นระเบียบ",
		id: "Dengan kebiasaan Flamigo yang disebut Sinkronisasi, kelompok Pokémon ini menyerang lawan secara bersamaan dengan sinkron."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽擊",
			th: "ตีปีก",
			id: "Mengepak"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "急降",
			th: "โฉบ",
			id: "Menukik Drastis"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card