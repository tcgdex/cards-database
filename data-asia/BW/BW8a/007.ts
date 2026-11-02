import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトモシ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [607],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "普段 炎は 消えているが 人や ポケモンの 生命力を 吸いとると 炎は きらめく。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "こがす"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。"
		},

		cost: ["Fire"]
	}, {
		name: {
			ja: "ひだね"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567844, tcgplayer: 602212, cardtrader: 142982 }, stamp: ["1st-edition"] }
	]
}

export default card
