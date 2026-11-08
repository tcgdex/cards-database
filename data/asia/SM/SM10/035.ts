import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マタドガス",
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "どちらかが ふくらむと 片方は しぼむ 双子の ドガース。 いつも 体内の 毒ガスを 混ぜている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いのこりガス" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、相手のたねポケモン全員に、それぞれダメカンを1個のせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とびちるヘドロ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメカンがのっている相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557390,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドガース",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [110],
};

export default card;
