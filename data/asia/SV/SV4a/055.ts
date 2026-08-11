import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ピカチュウ",
		'zh-tw': "皮卡丘",
		'th-th': "พิคาชู",
		'id-id': "Pikachu"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],

	description: {
		'ja-jp': "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力 一口氣釋放出來。",
		'th-th': "ที่แก้มทั้งสองข้างมีถุงสำหรับเก็บไฟฟ้า พอโกรธจะปล่อยไฟฟ้าที่เก็บเอาไว้ออกมาในรวดเดียว",
		'id-id': "Pikachu memiliki kantong penampung listrik di kedua pipinya. Ketika marah, Pokémon ini mengeluarkan seluruh listrik yang telah terkumpul."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "なきごえ",
			'zh-tw': "叫聲",
			'th-th': "เสียงร้อง",
			'id-id': "Bersuara"
		},

		effect: {
			'ja-jp': "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้จะถูก [-20]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 20."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'ja-jp': "ピカボルト",
			'zh-tw': "皮卡伏特",
			'th-th': "พิคาโบลต์",
			'id-id': "Pika Bolt"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746437,
				tcgplayer: 567428,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577325,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card