import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コジオ",
		'zh-tw': "鹽石寶",
		th: "โคจีโอ",
		id: "Nacli"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [932],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
		'zh-tw': "出生在地底的岩鹽層。會願意分享貴重的鹽巴， 因此在過去更是受到重視。",
		th: "เกิดในชั้นหินเกลือใต้ดิน ในสมัยก่อนมีผู้ให้ความสำคัญกับมันเป็นอย่างมากเพราะมันแบ่งปันเกลือที่แสนล้ำค่าให้",
		id: "Nacli terlahir di kubah garam di dasar tanah. Karena ia membagikan garam yang begitu berharga, Pokémon ini dijaga dengan baik pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "しおぬり",
			'zh-tw': "抹鹽",
			th: "ป้ายเกลือ",
			id: "Oles Garam"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「20」回復する。",
			'zh-tw': "將自己的1隻寶可夢恢復「20」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเรา 1 ตัว [20]",
			id: "Pulihkan HP 1 Pokémon sendiri sejumlah 20."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card