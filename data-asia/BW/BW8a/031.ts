import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニューラ"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [215],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "ずるがしこい ポケモンで 指に 隠した 長い ツメを いきなり 伸ばして 相手を ひるませる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "でんこうせっか"
		},

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージを追加。"
		},

		damage: "20+",
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

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567874, tcgplayer: 602223, cardtrader: 143006 }, stamp: ["1st-edition"] }
	]
}

export default card
