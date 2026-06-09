import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蛋蛋",
		ja: "タマタマ"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "雖然看起來很像是蛋，但卻是如假包換的寶可夢。似乎會用 心靈感應來與夥伴們交流喔。",
		ja: "タマゴのように 見えるが 立派な ポケモン。 テレパシーで 仲間と 交信している らしいぞ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			ja: "ぶつかる"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "種子炸彈",
			ja: "タネばくだん"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [102],

	thirdParty: {
		cardmarket: 605852
	}
}

export default card