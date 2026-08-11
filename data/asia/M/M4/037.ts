import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャオニクス",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'ja-jp': "危険が 迫ると 耳を 持ち上げ １０トン トラックを ひねりつぶす サイコパワーを 解放する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トリックステップ" },
			damage: 80,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876936,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニャスパー",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
