import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンファン"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [232],
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		ja: "ゴマゾウ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "つのでえぐる"
		},

		effect: {
			ja: "ダメージを与えるとき、すでに相手にダメージカウンターがのっているなら、20ダメージを追加する。"
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			ja: "ダブルスピン"
		},

		effect: {
			ja: "コインを2回投げ、オモテ×60ダメージ。"
		},

		damage: "60×",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784516,
				tcgplayer: 613068,
				cardtrader: 138016,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784516,
				tcgplayer: 613068,
				cardtrader: 138016,
			},
		},
	]
}

export default card
