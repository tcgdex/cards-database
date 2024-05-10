import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴース",
		'zh-tw': "鬼斯",
		th: "โกส",
		id: "Gastly"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
		'zh-tw': "會用氣體狀的身體纏住獵物，再從皮膚緩緩地注入毒素， 使對手變得虛弱。",
		th: "ใช้ร่างกายที่เป็นแก๊สเกาะติดเหยื่อแล้วค่อย ๆ ส่งพิษผ่านเข้าผิวหนังไปทีละนิดจนเหยื่ออ่อนแอลง",
		id: "Gastly melekat pada mangsanya dengan tubuh gasnya, lalu melemahkan mereka dengan mengirimkan racun sedikit demi sedikit melalui kulit mereka."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			th: "ห่อหุ้มด้วยแก๊ส",
			id: "Gas yang Menyelimuti"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
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