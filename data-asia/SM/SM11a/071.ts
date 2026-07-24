import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラペルシアンGX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ドヤがお" },
			effect: {
				ja: "このポケモンは、相手の「TAG TEAM」「ウルトラビースト」と、特殊エネルギーがついている相手のポケモンから、ワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 120,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ストーククローGX" },
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、120ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556772,
			},
		},
	],

	evolveFrom: {
		ja: "アローラニャース",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [53],

	suffix: "GX",
};

export default card;
