import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "フワライド",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "夕闇を 風に 乗って 飛ぶ フワライドに 捕まると あの世へ 運ばれるという ウワサだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "タッグキャリー" },
			effect: {
				ja: "自分の番に1回使える。自分のバトル場のTAG TEAMのポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かいてんアタック" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557294,
			},
		},
	],

	evolveFrom: {
		ja: "フワンテ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [426],
};

export default card;
