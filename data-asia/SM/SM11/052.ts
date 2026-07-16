import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "アーケオス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "羽毛が 細かいので 熟練の 職人 でなければ 復元に 失敗するという 古代の ポケモン。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "とんぼがえり" },
			damage: 40,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "はかいこうせん" },
			damage: 80,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557014,
			},
		},
	],

	evolveFrom: {
		ja: "アーケン",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [567],
};

export default card;
