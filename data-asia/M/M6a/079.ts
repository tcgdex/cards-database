import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "寿命が 尽きるとき あらゆる 生き物の 命を 吸い尽くし 繭の 姿に 戻るという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ライフバインド" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンのHPは、回復しない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダークカッター" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908257,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [717],
};

export default card;
