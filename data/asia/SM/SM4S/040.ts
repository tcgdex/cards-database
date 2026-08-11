import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ムクホーク",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'ja-jp': "翼と 脚の 筋肉が 強く 小さな ポケモンを つかんだまま らくらくと 飛ぶことが できる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "スカイハンティング" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージで、相手のポケモンがきぜつしたなら、このポケモンとベンチポケモンを入れ替える。",
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
		'ja-jp': "ムクバード",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [398],
};

export default card;
