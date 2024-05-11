import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大食花",
		th: "อุซึบ็อท"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "被牠吞進體內的東西不管有多硬，都會被溶解液不留痕跡地融化掉。",
		th: "สิ่งที่เอาใส่เข้าไปในร่างกายไม่ว่าจะแข็งแค่ไหนก็จะถูกละลายด้วยของเหลวทำละลายจนไม่เหลือซาก"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "恐慌藤蔓",
			th: "แพนิกไวน์"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [สับสน] ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "日光束",
			th: "โซล่าร์บีม"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card