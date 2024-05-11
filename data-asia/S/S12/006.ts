import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓絲蛛",
		th: "อิโตมารุ"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "牙齒的毒性並不強烈，但用來削弱那些掛在蛛網上 無法動彈的獵物是綽綽有餘。",
		th: "พิษที่เขี้ยวไม่ร้ายแรงเท่าไหร่ แต่ก็เพียงพอให้เหยื่อที่มาเกาะรังอ่อนแรงลง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蟲咬",
			th: "แมลงกัด"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card