import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガマガル"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [536],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		ja: "オタマロ"
	},

	description: {
		ja: "水中と 陸地で 暮らす。 長く ねばねばする ベロを使って 相手の 動きを 封じこめる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "しんどう"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "あやしいおんぱ"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567857, tcgplayer: 602218, cardtrader: 142989 }, stamp: ["1st-edition"] }
	]
}

export default card
