import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "額の ツノは 子どもに エサを 与えるときに 刺さらないよう 退化したと 考えられている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハッピーシェア" },
			effect: {
				ja: "自分の番に1回使える。自分のポケモン1匹のHPを「30」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908252,
			},
		},
	],

	evolveFrom: {
		ja: "ニドラン♀",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [30],
};

export default card;
