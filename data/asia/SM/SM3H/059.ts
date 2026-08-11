import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホウオウGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "せいなるほのお" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "フェニックスバーン" },
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「フェニックスバーン」が使えない。",
			},
		},
		{
			name: { ja: "エターナルライトGX" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュにある[炎]タイプの「ポケモンGX・EX」を3枚、ベンチに出す。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561123,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [250],

	suffix: "GX",
};

export default card;
