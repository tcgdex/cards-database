import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パチリス",
		'zh-tw': "帕奇利茲",
		'th-th': "พาจิริซึ",
		'id-id': "Pachirisu"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [417],
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "溜まった 電気を 分け与えようと 頬袋を こすり合わせる パチリスを 見かけることも ある。",
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴 而互相摩擦頰囊的帕奇利茲。",
		'th-th': "บางทีก็พบเห็นพาจิริซึใช้ถุงแก้มเสียดสีกันเพื่อแบ่งไฟฟ้าที่เก็บสะสมไว้",
		'id-id': "Kadang terlihat Pachirisu yang saling menggosokkan kantong pipinya untuk membagikan listrik yang telah tertimbun."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "でんきぶくろ",
			'zh-tw': "電氣袋",
			'th-th': "ถุงไฟฟ้า",
			'id-id': "Kantong Listrik"
		},

		effect: {
			'ja-jp': "このポケモンはマヒにならない。",
			'zh-tw': "這隻寶可夢不會【麻痺】。",
			'th-th': "โปเกมอนนี้จะไม่เป็นสภาวะ[ชา]",
			'id-id': "Pokémon ini tidak akan menjadi Lumpuh."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "みんなでほうでん",
			'zh-tw': "一同放電",
			'th-th': "คายประจุไปด้วยกัน",
			'id-id': "Pelepasan Listrik Bersama"
		},

		damage: "10+",

		effect: {
			'ja-jp': "自分のベンチのポケモンの数×20ダメージ追加。このワザのダメージは弱点を計算しない。",
			'zh-tw': "增加自己的備戰區的【雷】寶可夢的數量×20點傷害。這個招式的傷害不計算弱點。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอน[สายฟ้า]บนเบนช์ฝ่ายเรา x20 แดเมจของท่าต่อสู้นี้จะไม่นำจุดอ่อนมาคิด",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon {Listrik} di Cadangan sendiri. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693104,
				tcgplayer: 568255,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card