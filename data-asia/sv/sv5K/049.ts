import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "グラエナ",
		'zh-tw': "大狼犬",
		th: "กราเอนา"
	},

	illustrator: "akagi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [262],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "優れた トレーナーの 命令には 絶対に 服従。大昔に 群れで 行動していた 名残り。",
		'zh-tw': "絕對服從優秀訓練家的命令。這是因為牠還殘留著 很久以前群體活動時的習性。",
		th: "จะเชื่อฟังคำสั่งของเทรนเนอร์ที่เก่งกาจอย่างเด็ดขาด ซึ่งพฤติกรรมนี้มาจากสัญชาตญาณการอยู่เป็นฝูงที่หลงเหลือมาจากอดีตอันแสนไกล"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "けりとばす",
			'zh-tw': "踹開",
			th: "ถีบกระเด็น"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card