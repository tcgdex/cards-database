import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "フワンテ",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "風船と 間違えて フワンテを 持っていた 小さな 子どもが 消えてしまうことが あるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっぱる" },
			cost: ["Psychic"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807436,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [425],
};

export default card;
