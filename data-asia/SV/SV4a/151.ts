import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パフュートン"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [916],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		ja: "グルトン"
	},

	description: {
		ja: "花のような 香りを 振りまく。 筋肉が 発達した 脚は 軽く ５メートルを 飛び越える。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "えりすぐり"
		},

		effect: {
			ja: "コインを3回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、手札に加える。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "パフュームプレス"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 70,
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
				cardmarket: 746533,
				tcgplayer: 567552,
				cardtrader: 269782,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577383,
			},
		},
	]
}

export default card
