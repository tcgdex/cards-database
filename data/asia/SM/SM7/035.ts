import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "プラスル",
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電柱から 電気を 吸い取る。 体に ためた 電気を ショートさせて 音を 出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みんなでドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、おたがいのベンチポケモンの数ぶん、山札を引く。",
			},
		},
		{
			name: { ja: "エレキボール" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558996,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [311],
};

export default card;
