import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "マーイーカ",
		'zh-tw': "好啦魷",
		th: "มาอีกะ"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "敵に 発光体の 点滅を 浴びせて 戦意を なくしてしまう。 その 隙に 逃げ出すのだ。",
		'zh-tw': "會讓敵人看到自己閃爍的發光體來讓對方喪失戰意，然後趁機逃之夭夭。",
		th: "ให้ศัตรูอาบแสงกะพริบจากร่างเรืองแสงแล้วทำให้หมดความมุ่งมั่นที่จะต่อสู้ อาศัยช่วงเวลานั้นหลบหนีไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "だきつく",
			'zh-tw': "緊抱",
			th: "กอดแน่น"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card