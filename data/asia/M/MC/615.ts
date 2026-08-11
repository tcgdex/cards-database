import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "巨大な 岩石も 粉々に 砕く 超音波を 発する。 残忍な 性質の ポケモン。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "チューニングエコー" },
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、このポケモンが「パニックハウル」を使うためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パニックハウル" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863917,
			},
		},
	],

	evolveFrom: {
		ja: "オンバット",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [715],
};

export default card;
