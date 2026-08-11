import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランドロス",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "ランドロスが 訪れる 土地は 作物が たくさん 実るため 畑の神様 と 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きあいのこぶし" },
			damage: 30,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "自分のトラッシュからエネルギーを1枚選び、このポケモンにつける。",
			},
		},
		{
			name: { ja: "バスタースイング" },
			damage: 130,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863699,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [645],
};

export default card;
