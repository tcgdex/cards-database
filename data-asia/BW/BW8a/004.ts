import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュプトル"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [253],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		ja: "キモリ"
	},

	description: {
		ja: "密林に 生息する。 枝から 枝へ 飛び移りながら 移動して 獲物に 接近する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "はたく"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "いあいぎり"
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
		{ type: "normal", thirdParty: { cardmarket: 567839, tcgplayer: 602206, cardtrader: 142979 }, stamp: ["1st-edition"] }
	]
}

export default card
