import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキハミ",
		'zh-tw': "雪吞蟲",
		th: "ยูกิฮามิ"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	dexId: [872],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "エサは 地面に 積もった 雪。 柔らかな 新雪を 好み 山頂 目指して 食べ進む。",
		'zh-tw': "地面的積雪是牠的主食。對新下的鬆軟白雪情有獨鍾， 會朝著山頂一路吃過去。",
		th: "หิมะที่สุมอยู่บนพื้นคืออาหาร โปรดปรานหิมะสดใหม่ที่มีความนิ่ม โดยจะกินไปเรื่อย ๆ พลางมุ่งหน้าสู่ยอดเขา"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "こなゆき",
			'zh-tw': "細雪",
			th: "ผงหิมะ"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card