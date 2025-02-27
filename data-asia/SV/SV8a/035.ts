import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒンバス",
		id: "Feebas",
		th: "ฮินบาส",
		'zh-tw': "醜醜魚",
		'zh-cn': "醜醜魚"
	},

	illustrator: "Scav",
	rarity: "None",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。",
		id: "Pokémon yang paling lusuh. Feebas berkumpul dalam jumlah besar dan tinggal di dasar sungai yang banyak tanaman airnya.",
		th: "โปเกมอนที่ดูโทรมที่สุด อาศัยอยู่กันเป็นฝูงที่ก้นแม่น้ำที่มีพืชน้ำมากมาย",
		'zh-tw': "最寒酸的寶可夢。 在有許多水草的河底 群聚而居。",
		'zh-cn': "最寒酸的寶可夢。 在有許多水草的河底 群聚而居。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "じたばた",
			id: "Berontak",
			th: "กระเสือกกระสน",
			'zh-tw': "抓狂",
			'zh-cn': "抓狂"
		},

		damage: "10×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "造成這隻寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card