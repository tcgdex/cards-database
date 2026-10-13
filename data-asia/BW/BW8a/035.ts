import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワルビル"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	dexId: [552],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		ja: "メグロコ"
	},

	description: {
		ja: "薄い 膜で 被われている 両目は 真夜中でも みえる。 数匹の 群れで 暮らしている。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "かみつく"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			ja: "どつく"
		},

		damage: 50,
		cost: ["Darkness", "Colorless", "Colorless"]
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
		{ type: "normal", thirdParty: { cardmarket: 567879, tcgplayer: 602209, cardtrader: 143010 }, stamp: ["1st-edition"] }
	]
}

export default card
