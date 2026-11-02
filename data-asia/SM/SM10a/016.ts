import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "常識の 通用しない この世の 裏側にあると 言われる 破れた世界に 生息する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じげんのかぎづめ" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あんこく" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557295,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [487],
};

export default card;
