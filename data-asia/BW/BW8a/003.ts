import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "キモリ"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [252],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "足の 裏には 小さな トゲが たくさん ついているので 壁や 天井を 歩くことが できる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "はたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "とつげき"
		},

		effect: {
			ja: "このポケモンにも10ダメージ。"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Water",
		value: "-20"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567838, tcgplayer: 602224, cardtrader: 142978 }, stamp: ["1st-edition"] }
	]
}

export default card
