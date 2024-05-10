import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "カラミンゴ",
		'zh-tw': "纏紅鶴"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [973],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "お腹に 溜めた エネルギーが くちばしから 漏れないように 首を 根元で 結んでいるらしい。",
		'zh-tw': "為了避免積蓄在肚子裡的能量外流，似乎會把 自己的脖子繫在頸根部上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "つつく",
			'zh-tw': "啄"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "コンバットビーク",
			'zh-tw': "鬥戰喙"
		},

		damage: "20+",

		effect: {
			ja: "相手のベンチポケモンの数×20ダメージ追加。",
			'zh-tw': "增加對手的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card