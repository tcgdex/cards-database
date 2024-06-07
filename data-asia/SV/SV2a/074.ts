import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "イシツブテ",
		'zh-tw': "小拳石",
		th: "อิชิซึบูเตะ",
		id: "Geodude"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [74],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "両手を 使い 険しい 崖を 登る。 その姿を 見た 人が ボルダリングを 始めたらしい。",
		'zh-tw': "會用雙手攀登險峻的山崖。 人們似乎是在目睹牠那姿態之後 才開始了抱石攀岩運動。",
		th: "ใช้แขนทั้งสองข้างปีนหน้าผาชันได้ จุดเริ่มของกีฬาปีนผา เหมือนจะมาจากคนที่เห็นภาพดังกล่าว",
		id: "Geodude menggunakan kedua tangannya untuk memanjat tebing yang curam. Orang yang melihatnya kabarnya mulai melakukan panjat tebing."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かたまる",
			'zh-tw': "凝固",
			th: "ทำให้แข็ง",
			id: "Perkeras"
		},

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんこつ",
			'zh-tw': "拳骨",
			th: "กำปั้น",
			id: "Kepalan Tinju"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card