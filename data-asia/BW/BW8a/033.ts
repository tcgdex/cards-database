import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソル"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [359],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "ツノで 察知した 災いを 人に 知らせようとして 山奥から 姿を 現す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "マインドジャック"
		},

		effect: {
			ja: "相手のベンチポケモンの数×20ダメージを追加。"
		},

		damage: "20+",
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			ja: "シャドーフィアー"
		},

		effect: {
			ja: "相手の手札を見る。"
		},

		damage: 60,
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

	retreat: 1,
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567877, tcgplayer: 602227, cardtrader: 143008 }, stamp: ["1st-edition"] }
	]
}

export default card
