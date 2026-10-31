import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "メグロコ"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [551],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "体温を さげないように 砂漠の 熱い 砂に 潜り 隠れながら 生活 している。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "ひっぱたく"
		},

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージを追加。"
		},

		damage: "10+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	retreat: 2,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567878, tcgplayer: 602221, cardtrader: 143009 }, stamp: ["1st-edition"] }
	]
}

export default card
