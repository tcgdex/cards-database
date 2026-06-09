import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花岩怪",
		ja: "ミカルゲ"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "１０８個靈魂聚集在一起成為了寶可夢，但其中 似乎混進了壞心眼的靈魂。",
		ja: "１０８個の 魂が 集まり ポケモンになったが 性悪の 魂が 混じってしまったらしい。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "牢記恐懼",
			ja: "きょうふをきざむ"
		},

		effect: {
			'zh-tw': "在下個自己的回合結束前，受到這個招式的寶可夢弱點改爲【惡】屬性。[弱點以「×2」計算傷害。]",
			ja: "次の自分の番の終わりまで、このワザを受けたポケモンの弱点はタイプになる。［弱点は「×2」でダメージ計算をする。］"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "詛咒水滴",
			ja: "のろいのしずく"
		},

		effect: {
			'zh-tw': "將2個傷害指示物以任意方式放置於對手的寶可夢身上。",
			ja: "ダメカン2個を、相手のポケモンに好きなようにのせる。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [442],

	thirdParty: {
		cardmarket: 605916
	}
}

export default card