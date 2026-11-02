import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "特殊な 発声法で 歌う メロディは 聞いた者の 感情を 自在に 操る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うたう" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "ミラクルハーモニー" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場にいるワザ「うたう」を持つポケモンの数ぶんコインを投げ、オモテの数x10ダメージを、相手のポケモン全員にそれぞれ与える。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558849,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [648],
};

export default card;
