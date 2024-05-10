import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチex",
		'zh-tw': "鐵轍跡ex",
		th: "รอยล้อเหล็กex",
		id: "Iron Treads ex",
		'zh-cn': "鐵轍跡ex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "クラッドローリング",
			'zh-tw': "鍍層回轉",
			th: "หุ้มเหล็กกลิ้ง",
			id: "Clad Rolling",
			'zh-cn': "鍍層回轉"
		},

		damage: 150,

		effect: {
			ja: "のぞむなら、ダメージを与えたあとに、このポケモンについている「ブーストエナジー 未来」をトラッシュする。その場合、次の相手の番、このポケモンが受けるワザのダメージは「-150」される。",
			'zh-tw': "若希望，在造成傷害後，將這隻寶可夢身上附加的「驅勁能量 未來」丟棄。這個情況下，在下個對手的回合，這隻寶可夢受到招式的傷害「-150」點。",
			th: "หากต้องการ หลังจากทำแดเมจแล้ว ทิ้ง [บูสต์เอนเนอร์จี้ อนาคต] ที่ติดอยู่กับโปเกมอนนี้ที่ตำแหน่งทิ้งการ์ด เมื่อทำเช่นนั้นแล้ว เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-150]",
			id: "Setelah memberikan kerusakan, pemain dapat membuang Pemacu Energi Futur yang dikenakan pada Pokémon ini ke Trash. Jika dilakukan, pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 150.",
			'zh-cn': "若希望，在造成傷害後，將這隻寶可夢身上附加的「驅勁能量 未來」丟棄。這個情況下，在下個對手的回合，這隻寶可夢受到招式的傷害「-150」點。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card