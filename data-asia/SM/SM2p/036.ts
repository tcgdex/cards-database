import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンカラス",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "夜行性。 一声 鳴けば １００匹を 超える 子分の ヤミカラスが 集結する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "だましうち" },
			cost: ["Darkness"],
			effect: {
				ja: "相手のポケモン1匹に、30ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。",
			},
		},
		{
			name: { ja: "レイブンクロー" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の場のポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561277,
			},
		},
	],

	evolveFrom: {
		ja: "ヤミカラス",
	},

	retreat: 1,
	rarity: "None",
	dexId: [430],
};

export default card;
