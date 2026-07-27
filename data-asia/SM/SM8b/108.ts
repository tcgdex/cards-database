import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "スピンロトム",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "プラズマで できた 体を 持つ。 電化製品に 潜りこみ 悪さを することで 知られている。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ロトモーター" },
			effect: {
				ja: "自分のトラッシュに「ポケモンのどうぐ」が9枚以上あるなら、このポケモンが使うワザに必要なエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "くるくるスピン" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551036,
			},
		},
	],

	retreat: 0,
	rarity: "None",
	dexId: [479],
};

export default card;
