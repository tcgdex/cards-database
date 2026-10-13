import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イワーク"
	},

	illustrator: "Toyste Beach",
	rarity: "Common",
	category: "Pokemon",
	dexId: [95],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "大きな 口を あけて たくさんの 土を 飲みこみながら 長い トンネルを つくっていく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "たいあたり"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "ふりまわす"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×60ダメージ。"
		},

		damage: "60×",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567873, tcgplayer: 602217, cardtrader: 143005 }, stamp: ["1st-edition"] }
	]
}

export default card
