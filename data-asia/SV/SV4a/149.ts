import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨクバリス"
	},

	illustrator: "kantaro",
	rarity: "None",
	category: "Pokemon",
	dexId: [820],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ホシガリス"
	},

	description: {
		ja: "体の 約２倍の 長さの 尻尾で 木から 落とした 木の実を ごっそり 包んで 持ち去るぞ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "かみつく"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "きょうかまえば"
		},

		effect: {
			ja: "このポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746531,
				tcgplayer: 567550,
				cardtrader: 269787,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577381,
			},
		},
	]
}

export default card
