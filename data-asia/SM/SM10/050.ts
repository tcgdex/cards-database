import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ドサイドン",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		ja: "手のひらの 穴から イシツブテを 発射。 全身の プロテクターは 火山の 噴火にも 耐えられる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "どっしんキャノン" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			},
		},
		{
			name: { ja: "グラウンドブレイク" },
			damage: 160,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557408,
			},
		},
	],

	evolveFrom: {
		ja: "サイドン",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [464],
};

export default card;
