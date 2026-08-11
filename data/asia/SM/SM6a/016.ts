import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "ギャラドスが 現れる 場所は 破壊される 定めに あると 信じている 人も いる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おおあれ" },
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分のベンチポケモン全員に、それぞれダメカンを2個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ワイルドテール" },
			damage: 160,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559257,
			},
		},
	],

	evolveFrom: {
		ja: "コイキング",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [130],
};

export default card;
