import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凱路迪歐",
		ja: "ケルディオ"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "透過下定決心來讓全身充滿力量並變得敏捷。當跳躍起來的時候能看到殘影。",
		ja: "覚悟を 決めることで 全身に 力が みなぎって 素早くなり 飛び跳ねると 残像が みえる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢飛",
			ja: "けとばす"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "隊列之力",
			ja: "ラインフォース"
		},

		effect: {
			'zh-tw': "增加自己的備戰寶可夢的數量×20點傷害。",
			ja: "自分のベンチポケモンの数×20ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [647],

	thirdParty: {
		cardmarket: 687512
	}
}

export default card