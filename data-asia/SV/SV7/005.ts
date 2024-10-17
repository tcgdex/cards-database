import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "尖牙籠",
		'zh-cn': "尖牙籠",
		ja: "マスキッパ"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "以散發甜甜香氣的唾液吸引獵物， 再用大顎一口咬住。 會花上一整天吃掉獵物。",
		'zh-cn': "以散發甜甜香氣的唾液吸引獵物， 再用大顎一口咬住。 會花上一整天吃掉獵物。",
		ja: "甘い においの だえきで 獲物を おびき寄せ おおあごで がぶり。 １日 かけて 獲物を 食べる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷食",
			'zh-cn': "偷食",
			ja: "つまみぐい"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「40」HP。",
			'zh-cn': "將這隻寶可夢恢復「40」HP。",
			ja: "このポケモンのHPを「40」回復する。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "覆蓋",
			'zh-cn': "覆蓋",
			ja: "おおいかぶさる"
		},

		effect: {
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。"
		},

		damage: "130－",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [455]
}

export default card