import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリボン",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Fairy"],

	description: {
		ja: "花粉を 丸め 団子を つくる。 食用 から 戦闘用 まで たくさんの 種類が あるよ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いやしのかふん" },
			effect: {
				ja: "自分の番に1回使える。自分のポケモン1匹のHPを「20」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ようせいのかぜ" },
			damage: 30,
			cost: ["Fairy"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561719,
			},
		},
	],

	evolveFrom: {
		ja: "アブリー",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [743],
};

export default card;
