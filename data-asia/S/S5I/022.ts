import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "跳跳豬",
		th: "บาเนบู"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "用尾巴跳來跳去，藉此讓自己的心臟搏動。會把珍珠貝產出的珍珠戴在頭上。",
		th: "ใช้หางกระโดดเด้งเพื่อให้หัวใจทำงาน เอาไข่มุกที่ปาลูลุทำมาวางไว้บนศีรษะ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "魯莽頭擊",
			th: "กระโดดโหม่ง"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "力量寶石",
			th: "พาวเวอร์เจม"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card