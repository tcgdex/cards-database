import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フーパGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ローグリング" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ダークストライク" },
			damage: 160,
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「ダークストライク」が使えない。",
			},
		},
		{
			name: { ja: "デビルハンドGX" },
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手の「ポケモンGX・EX」を6回選び、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数x30ダメージ。（1匹を2回以上選べる。）［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558634,
			},
		},
	],

	retreat: 3,
	rarity: "Hyper rare",
	dexId: [720],

	suffix: "GX",
};

export default card;
