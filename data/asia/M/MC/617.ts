import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キテルグマ",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "仲間と 認めると 愛情を 示すために 抱きしめようとするが 骨を 砕かれるので 危険。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パワーチャージ" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを1枚選び、このポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863919,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌイコグマ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [760],
};

export default card;
