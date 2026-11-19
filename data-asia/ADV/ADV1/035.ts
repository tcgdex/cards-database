import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ノズパス"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [299],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "みえざるて"
		},

		effect: {
			ja: "相手のバトル場に進化ポケモンがいるなら、自分の山札から好きなカードを1枚選び出し、手札に加える。その後、その山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "はんぱつじりょく"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手と相手についているすべてのカードを、相手プレイヤーの手札にもどす。(相手のポケモンが1匹なら、このワザは失敗する。)"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784519,
				tcgplayer: 613072,
				cardtrader: 138019,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784519,
				tcgplayer: 613072,
				cardtrader: 138019,
			},
		},
	]
}

export default card
