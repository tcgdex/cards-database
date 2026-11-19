import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ケムッソ"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [265],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "しんかのきざし"
		},

		effect: {
			ja: "自分の山札から、「カラサリス」と「アゲハント」、または「マユルド」と「ドクケイル」を、それぞれ1枚ずつ選び出し、相手プレイヤーに見せてから、手札に加える。その後、その山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "どくのトゲ"
		},

		effect: {
			ja: "相手をどくにする。"
		},

		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784488,
				tcgplayer: 613051,
				cardtrader: 137988,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784488,
				tcgplayer: 613051,
				cardtrader: 137988,
			},
		},
	]
}

export default card
