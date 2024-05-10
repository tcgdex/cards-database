import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェルカモ",
		'zh-tw': "湧躍鴨"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	dexId: [913],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ひたすらに 浅瀬を 走り込んで 足腰を 鍛え 仲間同士で 足技の 華麗さを 競いあう。",
		'zh-tw': "會在淺灘不斷跑步來鍛鍊下盤的筋骨，好跟夥伴們 競爭誰的腿技最為華麗。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card