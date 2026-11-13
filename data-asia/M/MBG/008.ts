import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ムゲンダイナ"
	},

	illustrator: "akagi",
	rarity: "None",
	category: "Pokemon",
	dexId: [890],
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "胸の コアが ガラル地方の 大地から 涌きだす エネルギーを 吸収して 活動している。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "たたきこわす"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			ja: "パワーラッシュ"
		},

		effect: {
			ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846825,
				tcgplayer: 660125,
				cardtrader: 345816,
			},
		},
	]
}

export default card
