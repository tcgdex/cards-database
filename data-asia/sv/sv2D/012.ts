import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒノヤコマ",
		'zh-tw': "火箭雀",
		th: "ฮิโนยาโคมะ",
		id: "Fletchinder"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [662],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "虫ポケモンが 潜んでいそうな 草むらに 火の粉を まき散らして 飛び出してきたところを 捕まえる。",
		'zh-tw': "會朝著似乎潛伏著蟲寶可夢的草叢灑出火花， 然後趁牠們跳出來時獵捕。",
		th: "โปรยสะเก็ดไฟใส่พงหญ้าที่น่าจะมีโปเกมอนแมลงซ่อนตัวอยู่ แล้วคอยจับตัวที่บินหนีออกมา",
		id: "Fletchinder membakar rerumputan yang sekiranya menjadi tempat Pokémon serangga bersembunyi, lalu menangkap saat mereka melompat keluar."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ヒートダイブ",
			'zh-tw': "高溫奇襲",
			th: "ฮีตไดฟ์",
			id: "Heat Dive"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
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

	retreat: 1,
	regulationMark: "G"
}

export default card