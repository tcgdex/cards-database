import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノコウベ",
		id: "Iron Jugulis",
		th: "คอเหล็ก",
		'zh-tw': "鐵脖頸",
		'zh-cn': "鐵脖頸"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	dexId: [993],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "古い 書物に 記された テツノコウベという 物体は このポケモンかも しれない。",
		id: "Kemungkinan Pokémon ini adalah objek bernama Iron Jugulis yang tertera dalam buku kuno.",
		th: "วัตถุที่เรียกว่าคอเหล็กที่ระบุในบันทึกเก่าแก่อาจเป็นโปเกมอนตัวนี้",
		'zh-tw': "古書裡所記載的 叫做鐵脖頸的物體， 說不定就是這隻寶可夢。",
		'zh-cn': "古書裡所記載的 叫做鐵脖頸的物體， 說不定就是這隻寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ホーミングヘッド",
			id: "Homing Head",
			th: "โฮมมิงเฮด",
			'zh-tw': "自動導向頭擊",
			'zh-cn': "自動導向頭擊"
		},

		effect: {
			ja: "ダメカンがのっている相手のポケモン3匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 3 Pokémon lawan yang memiliki Token Kerusakan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "โปเกมอนฝ่ายตรงข้าม 3 ตัวที่มีตัวนับแดเมจวางอยู่ จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'zh-tw': "對手的身上放置有傷害指示物的3隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的身上放置有傷害指示物的3隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バリオンビーム",
			id: "Baryon Beam",
			th: "แบรีออนบีม",
			'zh-tw': "重子光束",
			'zh-cn': "重子光束"
		},

		damage: 150,

		effect: {
			ja: "このワザは、このポケモンに「ブーストエナジー 未来」がついているなら、エネルギー3個で使える。",
			id: "Jika Pokémon ini mengenakan Pemacu Energi Futur, serangan ini dapat digunakan dengan 3 Energi {Bening}.",
			th: "ท่าต่อสู้นี้ ถ้าโปเกมอนนี้มี [บูสต์เอนเนอร์จี้ อนาคต] ติดอยู่ สามารถใช้ได้ด้วยพลังงาน[ไร้สี] 3 ลูก",
			'zh-tw': "若這隻寶可夢身上附有「驅勁能量 未來」，則這個招式只需要3個【無】能量即可使用。",
			'zh-cn': "若這隻寶可夢身上附有「驅勁能量 未來」，則這個招式只需要3個【無】能量即可使用。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card