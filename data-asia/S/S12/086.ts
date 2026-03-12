import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓鼬少",
		th: "ยังกูส",
		ja: "ヤングース"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然什麼都吃，但特別偏好活生生的新鮮食物， 會為了尋找獵物而四處遊走。",
		th: "กินได้ทุกอย่างแต่ถ้าเป็นสิ่งที่ยังมีชีวิตและสดใหม่จะดีกว่า ก็เลยเดินกันเป็นขบวนไปตามทางเพื่อหาเหยื่อ",
		ja: "なんでも 食べるが 新鮮で 生きているものが いいので 獲物を 探して 道を 練り歩く。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙",
			th: "เขี้ยวคม",
			ja: "するどいキバ"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [734],

	thirdParty: {
		cardmarket: 680225
	}
}

export default card