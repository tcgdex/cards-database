import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "オシャマリ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "仲間を 思う 気持ちが 強い。 トレーナーが 落ち込んでいると ダンスを 踊って 励まそうとする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゆうわく" },
			cost: ["Water"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558911,
			},
		},
	],

	evolveFrom: {
		ja: "アシマリ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [729],
};

export default card;
