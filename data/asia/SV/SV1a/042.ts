import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナカヌチャン",
		'zh-tw': "巧鍛匠",
		'th-th': "นาคานุจัง",
		'id-id': "Tinkatuff"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [958],
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
		'zh-tw': "為了製作又大又堅固的錘子，會去襲擊劈斬司令 的群體，藉以收集金屬。",
		'th-th': "จะโจมตีฝูงคิริคิซันและรวบรวมโลหะมาเพื่อสร้างค้อนที่มีขนาดใหญ่และแข็งแรง",
		'id-id': "Untuk membuat palu yang besar dan kuat, Tinkatuff menyerang kelompok Bisharp dan mengumpulkan logam dari mereka."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "なぐる",
			'zh-tw': "打擊",
			'th-th': "ทุบตี",
			'id-id': "Memukul"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "そこぢから",
			'zh-tw': "潛力",
			'th-th': "พลังแฝง",
			'id-id': "Kekuatan Laten"
		},

		damage: 80,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 701096,
				tcgplayer: 568165,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card