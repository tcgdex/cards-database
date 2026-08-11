import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドリュウズ",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "鋼に 進化した ドリルは 鉄板を 貫く 破壊力。 トンネル工事で 大活躍する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あなほりクロー" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "ドリルスマッシュ" },
			damage: "60+",
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチに[M]ポケモンがいるなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863688,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モグリュー",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [530],
};

export default card;
