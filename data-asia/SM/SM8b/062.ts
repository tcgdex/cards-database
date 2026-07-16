import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マッシブーン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "謎の 生物 ＵＢ。 一発の パンチで ダンプカーを 粉砕する 光景が 目撃 された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スレッジハンマー" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "相手のサイドの残り枚数が4枚なら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ふりまわす" },
			damage: "80+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550796,
			},
		},
	],

	retreat: 2,
	rarity: "None",
	dexId: [794],
};

export default card;
