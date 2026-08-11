import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ムックル",
		'zh-tw': "姆克兒",
		'th-th': "มุคคูรุ",
		'id-id': "Starly"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [396],
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "虫ポケモンを 狙って 野山を 大勢の 群れで 飛びまわる。 鳴き声が とても やかましい。",
		'zh-tw': "為了獵捕蟲寶可夢，以龐大的群體在山野間飛來飛去。 叫聲非常吵鬧。",
		'th-th': "จะบินเป็นฝูงใหญ่ตามป่าเขาเพื่อหมายตาโปเกมอนแมลง เสียงร้องนั้นหนวกหูมาก",
		'id-id': "Starly terbang berkeliling gunung dan padang rumput secara berkelompok dalam jumlah banyak untuk memburu Pokémon serangga. Bunyi ciapnya sangat bising."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はばたく",
			'zh-tw': "羽擊",
			'th-th': "ตีปีก",
			'id-id': "Mengepak"
		},

		damage: 20
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
				cardmarket: 693030,
				tcgplayer: 567180,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card