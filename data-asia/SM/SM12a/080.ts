import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "寿命が つきるとき あらゆる 生き物の 命を 吸いつくし 繭の 姿に 戻るという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くつがえす" },
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "わしづかみ" },
			damage: 60,
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544026,
			},
		},
	],

	retreat: 0,
	regulationMark: "B",
	rarity: "None",
	dexId: [717],
};

export default card;
