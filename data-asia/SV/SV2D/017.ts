import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウ",
		'zh-tw': "皮卡丘",
		th: "พิคาชู",
		id: "Pikachu"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力 一口氣釋放出來。",
		th: "ที่แก้มทั้งสองข้างมีถุงสำหรับเก็บไฟฟ้า พอโกรธจะปล่อยไฟฟ้าที่เก็บเอาไว้ออกมาในรวดเดียว",
		id: "Pikachu memiliki kantong penampung listrik di kedua pipinya. Ketika marah, Pokémon ini mengeluarkan seluruh listrik yang telah terkumpul."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なきごえ",
			'zh-tw': "叫聲",
			th: "คำราม",
			id: "Bersuara"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้จะถูก [-20]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 20."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ピカボルト",
			'zh-tw': "皮卡伏特",
			th: "พิคาโบลต์",
			id: "Pika Bolt"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705321
	}
}

export default card