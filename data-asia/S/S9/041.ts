import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮皮",
		ja: "ピッピ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說如果在滿月的夜晚看見皮皮們聚在一起跳舞， 就能得到幸福。",
		ja: "満月の夜 ピッピが 集まって ダンスを 踊るようすを 見ると しあわせに なれると 言われている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			ja: "はたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "魔法射擊",
			ja: "マジカルショット"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [35],

	thirdParty: {
		cardmarket: 605892
	}
}

export default card