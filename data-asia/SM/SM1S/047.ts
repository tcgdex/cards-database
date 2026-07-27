import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ハーデリア",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "黒い 体毛は とても 硬くて どんどん 伸びる。 トリミング代が かかって 大変な ポケモン。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おたからサーチ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュにあるグッズを1枚、相手に見せてから、手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561724,
			},
		},
	],

	evolveFrom: {
		ja: "ヨーテリー",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [507],
};

export default card;
