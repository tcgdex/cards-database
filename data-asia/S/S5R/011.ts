import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [824],
	rarity: "Common",
	set: Set,

	name: {
		ja: "サッチムシ",
		'zh-tw': "索偵蟲",
		th: "ซัจจิมุชิ"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "畑で よく見かける ポケモン。 体に 生えた 毛で まわりで 起きていることを 感じとる。",
		'zh-tw': "經常出現在田地裡的寶可夢。會透過長在身體上的毛來感應周圍發生的事。",
		th: "เป็นโปเกมอนที่พบเห็นได้บ่อยตามทุ่งนา รับรู้ความรู้สึกของสิ่งที่เกิดขึ้นรอบตัวได้ด้วยขนที่ขึ้นตามร่างกาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533627, tcgplayer: 569052, cardtrader: 240013 } }
	]
}

export default card