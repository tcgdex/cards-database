import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ノクタス",
	},

	illustrator: "okayamatakatoshi",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "砂漠に 生息。 夜になると 動きだし 砂漠の 暑さで 疲れ果てた 獲物を 捕らえる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょくげきだん" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "パニッシュニードル" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				ja: "相手の場の特性を持つポケモンの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 899795,
				tcgplayer: 709161,
			},
		},
	],

	evolveFrom: {
		ja: "サボネア",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [332],
};

export default card;
