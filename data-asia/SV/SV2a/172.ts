import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "キャタピー",
		'zh-tw': "綠毛蟲",
		th: "คาเตอร์ปี",
		id: "Caterpie"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	dexId: [10],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "脚は 短いが 吸盤に なっているので 坂でも 壁でも くたびれることなく 進んでいく。",
		'zh-tw': "別看牠的腳很短，因為是吸盤，所以無論是斜坡還是牆壁都能輕鬆前進。",
		th: "ขาสั้นแต่ว่าเป็นปุ่มดูดก็เลยเคลื่อนตัวไปเกาะได้ทั้งทางลาดและกำแพงโดยไม่รู้สึกเหนื่อยเลย",
		id: "Walau kaki Caterpie pendek, kakinya merupakan pengisap, sehingga Pokémon ini dapat maju terus menaiki tanjakan dan dinding tanpa merasa lelah."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はっぱをたべる",
			'zh-tw': "吃葉子",
			th: "กินใบไม้",
			id: "Memakan Daun"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンがポケモンなら、30ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為【草】寶可夢，則增加30點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน[หญ้า] การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {Daun}, kerusakan yang diberikan bertambah sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card