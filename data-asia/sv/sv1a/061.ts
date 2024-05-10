import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "エンニュート",
		'zh-tw': "焰后蜥",
		th: "เอ็นนิวท์",
		id: "Salazzle"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [758],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "毒ガスで クラクラにした 相手を 妖艶な 身のこなしで 誘惑し 忠実な しもべに してしまう。",
		'zh-tw': "會用妖豔的身姿誘惑被牠的毒瓦斯弄得頭昏眼花的對手， 使其變成自己忠實的僕人。",
		th: "ยั่วยวนคู่ต่อสู้ที่มึนงงเพราะแก๊สพิษด้วยท่าทีเย้ายวน ทำให้อีกฝ่ายกลายเป็นผู้รับใช้ที่ซื่อสัตย์",
		id: "Salazzle menggunakan sosoknya yang memesona untuk memikat lawan yang terhuyung-huyung akibat gas beracun dan menjadikan mereka bawahan yang setia."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			th: "ห่อหุ้มด้วยแก๊ส",
			id: "Gas yang Menyelimuti"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑",
			th: "ตบแรง",
			id: "Menepuk"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card