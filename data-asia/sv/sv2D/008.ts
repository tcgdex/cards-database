import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンチュラ",
		'zh-tw': "團珠蛛",
		th: "ทามันทูล่า",
		id: "Tarountula"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [917],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "体を 包みこむ 糸玉は 天敵の ストライクの カマを はね返す 弾力性を 持つ。",
		'zh-tw': "包裹著身體的線球擁有足以把天敵飛天螳螂 的鐮刀反彈回去的彈力。",
		th: "ก้อนเส้นใยที่พันหุ้มลำตัวมีความยืดหยุ่นที่สามารถดีดเคียวของสไตรค์ซึ่งเป็นศัตรูตามธรรมชาติกลับไปได้",
		id: "Bola benang yang melilit di tubuh Tarountula memiliki elastisitas yang dapat menangkis sabit tajam Scyther, musuh alaminya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "ひっかける",
			'zh-tw': "鉤住",
			th: "จับแขวน",
			id: "Mengait"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card