import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "パピモッチ",
		'zh-tw': "狗仔包",
		th: "พาปิม็อตจิ",
		id: "Fidough"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [926],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "しっとり すべすべの 触り心地。 吐息に 含まれている 酵母で まわりのものを 発酵させる。",
		'zh-tw': "摸起來既濕潤又絲滑。吐出的氣息裡含有酵母， 可以使周圍的東西發酵。",
		th: "มีร่างกายที่ชุ่มชื้นและเรียบเนียนน่าสัมผัส หมักสิ่งที่อยู่รอบตัวด้วยยีสต์ซึ่งมาพร้อมกับลมหายใจ",
		id: "Tubuh Fidough empuk, halus, dan nyaman dipegang. Napasnya yang mengandung ragi dapat memfermentasikan benda-benda yang ada di sekitarnya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "もちもち",
			'zh-tw': "Q彈Q彈",
			th: "เหนียวหนึบหนับ",
			id: "Kenyal"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "はねまわる",
			'zh-tw': "活蹦亂跳",
			th: "สะบัดตัว",
			id: "Melompat Berkeliling"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card