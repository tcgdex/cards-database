import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャオニクス",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "耳の 内側の 目玉模様から サイコパワーを 出すが あまりにも 強力なので ふさいでいる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "テレポートブレイク" },
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "30+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559576,
			},
		},
	],

	evolveFrom: {
		ja: "ニャスパー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [678],
};

export default card;
