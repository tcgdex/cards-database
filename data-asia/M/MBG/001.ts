import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴース"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	dexId: [92],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ちょっとうらむ"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846818,
				tcgplayer: 660119,
				cardtrader: 345809,
			},
		},
	]
}

export default card
