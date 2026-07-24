import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "トリトドン",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "再生能力が 高い。 さかなポケモンに 喰い千切られても 数時間で 元通りに なるよ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶきみなしる" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "じしん" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560341,
			},
		},
	],

	evolveFrom: {
		ja: "カラナクシ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [423],
};

export default card;
