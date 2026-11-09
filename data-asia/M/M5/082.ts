import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "カリキリ",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "落ち着いて 日光浴 できるよう カリキリ専用の フラワーポットを 与える トレーナーも 多い。"
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888627,
				cardtrader: 391488,
				tcgplayer: 695055,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [753],
};

export default card;
