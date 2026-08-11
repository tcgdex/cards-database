import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロケット団のペルシアンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こうまんしれい" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から10枚オモテにする。のぞむなら、その中にあるポケモンが持つワザを1つ選び、このワザとして使う。オモテにしたカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "クルーエルスラッシュ" },
			damage: 140,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863862,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ロケット団のニャース",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [53],

	suffix: "EX",
};

export default card;
