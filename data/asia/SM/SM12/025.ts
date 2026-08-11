import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ブラックキュレム",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "失った 体を 真実と 理想で 埋めてくれる 英雄を 待つ 氷の 伝説ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いてつくつばさ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ブリザードダスト" },
			damage: "100+",
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "場に自分のスタジアムが出ているなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554818,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [646],
};

export default card;
