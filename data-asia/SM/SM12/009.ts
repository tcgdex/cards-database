import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "フクスロー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ナルシストで 綺麗好き。 マメに お手入れ してあげないと いうことを 聞かなく なることも。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "このは" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "つばさではじく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554766,
			},
		},
	],

	evolveFrom: {
		ja: "モクロー",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [723],
};

export default card;
