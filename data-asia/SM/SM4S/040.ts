import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ムクホーク",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "翼と 脚の 筋肉が 強く 小さな ポケモンを つかんだまま らくらくと 飛ぶことが できる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "スカイハンティング" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、このポケモンとベンチポケモンを入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560352,
			},
		},
	],

	evolveFrom: {
		ja: "ムクバード",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [398],
};

export default card;
