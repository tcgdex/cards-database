import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "グライガー",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "いつもは 崖に 張りついている。 獲物を見つけると 羽を広げ 風に乗り 襲いかかってくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダブルショット" },
			cost: ["Fighting"],
			effect: {
				ja: "相手のベンチポケモン2匹に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561427,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [207],
};

export default card;
