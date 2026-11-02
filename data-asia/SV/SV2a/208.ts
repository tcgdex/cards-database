import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "リスタート" },
			effect: {
				ja: "自分の番に1回使える。自分の手札が3枚になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゲノムハック" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719661,
			},
		},
	],

	retreat: 0,
	regulationMark: "G",
	rarity: "Mega Hyper Rare",
	dexId: [151],

	suffix: "EX",
};

export default card;
