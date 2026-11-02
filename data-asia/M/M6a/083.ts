import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ",
	},

	illustrator: "Po-Suzuki",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "トゲで 岩盤に キズを つけると 触手の 先端を あてて 栄養を 吸収する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トゲでさす" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ドッカンニードル" },
			cost: ["Metal", "Metal"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ50ダメージ。このポケモンにも130ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908261,
			},
		},
	],

	evolveFrom: {
		ja: "テッシード",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [598],
};

export default card;
