import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "雷雲の 中に いると 言われる 伝説の ポケモン。 雷を 自在に 操る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アサルトサンダー" },
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、70ダメージ追加。このワザのダメージは弱点を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558577,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [145],
};

export default card;
