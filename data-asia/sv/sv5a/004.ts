import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "イトマル",
		'zh-tw': "圓絲蛛",
		th: "อิโตมารุ"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [167],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "丈夫な 糸を より合わせ 魚ポケモンを 捕らえる 網を こしらえる 漁師も いるぞ。",
		'zh-tw': "也有漁夫會將堅韌的絲編織起來，製作成可以 捕捉魚寶可夢的網。",
		th: "มีชาวประมงบางคนฟั่นใยที่ทนทานของมัน เพื่อทำแหจับโปเกมอนปลา"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬",
			th: "แมลงกัด"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card