import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カラカラ",
		'zh-tw': "卡拉卡拉",
		th: "คาระคาระ",
		id: "Cubone"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [104],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "死んだ 母親の 骨を 被る。 夢を 見て 泣くことも あるけど 涙を 流すたびに 強くなる。",
		'zh-tw': "頭上戴著死去母親的頭骨。雖然有時會因為作夢而哭泣， 但每次流淚後都會變得更強。",
		th: "สวมใส่กระดูกของแม่ที่เสียชีวิตไปแล้ว บางครั้งก็ร้องไห้เวลาฝัน น้ำตาที่ไหลออกมาแต่ละครั้งนั้นทำให้ตนแข็งแกร่งขึ้น",
		id: "Cubone mengenakan tengkorak ibunya yang telah mati. Kadang Pokémon ini menangis saat melihat mimpi, tapi tiap tetes air mata yang dialirkan olehnya membuat dirinya menjadi makin kuat."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おうえんボーン",
			'zh-tw': "加油骨",
			th: "กระดูกเชียร์",
			id: "Tulang Penyemangat"
		},

		effect: {
			ja: "このポケモンがベンチにいるかぎり、自分の「ガラガラ」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
			'zh-tw': "只要這隻寶可夢在備戰區，自己的「嘎啦嘎啦」使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนเบนช์ แดเมจของท่าต่อสู้ที่ [การะการะ] ฝ่ายเรา ใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก [+30]",
			id: "Selama Pokémon ini ada di Cadangan, kerusakan akibat serangan yang digunakan oleh Marowak sendiri kepada Pokémon Bertarung lawan bertambah sejumlah 30."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "にどたたき",
			'zh-tw': "二連敲",
			th: "ตีสองครั้ง",
			id: "Hantam Dua Kali"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card