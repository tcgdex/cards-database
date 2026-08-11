import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミミロップ",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "暑い 季節が 終わると 空気を たくさん 含んだ 体毛に 生え変わり 寒さに 備える。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とびだしキック" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "かいてんげり" },
			damage: 60,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863896,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ミミロル",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [428],
};

export default card;
