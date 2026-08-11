import { Card } from "models/database/card"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヒノヤコマ",
		'zh-tw': "火箭雀",
		'th-th': "ฮิโนยาโคมะ",
		'id-id': "Fletchinder"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [662],
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "虫ポケモンが 潜んでいそうな 草むらに 火の粉を まき散らして 飛び出してきたところを 捕まえる。",
		'zh-tw': "會朝著似乎潛伏著蟲寶可夢的草叢灑出火花， 然後趁牠們跳出來時獵捕。",
		'th-th': "โปรยสะเก็ดไฟใส่พงหญ้าที่น่าจะมีโปเกมอนแมลงซ่อนตัวอยู่ แล้วคอยจับตัวที่บินหนีออกมา",
		'id-id': "Fletchinder membakar rerumputan yang sekiranya menjadi tempat Pokémon serangga bersembunyi, lalu menangkap saat mereka melompat keluar."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'ja-jp': "ヒートダイブ",
			'zh-tw': "高溫奇襲",
			'th-th': "ฮีตไดฟ์",
			'id-id': "Heat Dive"
		},

		damage: 50,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705316,
				tcgplayer: 565874,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card