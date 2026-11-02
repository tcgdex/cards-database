import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリボン",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "花粉を 丸め 団子を つくる。 食用 から 戦闘用 まで たくさんの 種類が あるよ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みつあつめ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札にある基本エネルギーを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かふんだま" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561103,
			},
		},
	],

	evolveFrom: {
		ja: "アブリー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [743],
};

export default card;
