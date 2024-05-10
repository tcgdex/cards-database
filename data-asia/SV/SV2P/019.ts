import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "コオリッポ",
		'zh-tw': "冰砌鵝",
		th: "โคโอริปโปะ",
		id: "Eiscue"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [875],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "気温の 高い日は 仲間同士で 頭の 氷を くっつけて おたがいを 冷やしながら 過ごす。",
		'zh-tw': "在氣溫高的日子裡，會把頭的冰塊和夥伴們的緊貼 在一起，冰鎮彼此來度日。",
		th: "ในวันที่อากาศร้อน จะเอาหัวน้ำแข็งของตนไปแปะติดกับพวกพ้องเพื่อช่วยคลายร้อนให้กันและกัน",
		id: "Pada hari bersuhu tinggi, Eiscue menempelkan es kepalanya dengan sesamanya dan saling mendinginkan satu sama lain."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘",
			th: "พุ่งหัวชน",
			id: "Tandukan Kepala"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アイスブロック",
			'zh-tw': "冰之障礙",
			th: "ไอซ์บล็อก",
			id: "Ice Block"
		},

		damage: 100,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番、このポケモンが受けるワザのダメージは「-100」される。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-100]",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash. Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 100."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card