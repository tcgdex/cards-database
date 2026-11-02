import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ルクシオ",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "鋭い ツメの 先には 強い 電気が 流れており ほんの少し かするだけで 相手を気絶させる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "トップエントリー" },
			effect: {
				ja: "自分の番のはじめに、山札からこのカードを引いたとき、自分のベンチに空きがあるなら、手札に加える前に1回使える。このカードを自分のベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エレキック" },
			damage: 30,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463109,
				tcgplayer: 597259,
			},
		},
	],

	evolveFrom: {
		ja: "コリンク",
	},

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [404],
};

export default card;
