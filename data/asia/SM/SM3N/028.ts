import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "サイドン",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "全身を よろいのような 皮膚で 守っている。 ２０００度の マグマの 中でも 生きられる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "がんせきおとし" },
			damage: 80,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "メガホーン" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561028,
			},
		},
	],

	evolveFrom: {
		ja: "サイホーン",
	},

	retreat: 4,
	rarity: "Common",
	dexId: [112],
};

export default card;
