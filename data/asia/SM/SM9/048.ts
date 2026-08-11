import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベトベトン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "エサが 減って 数も 激減。 絶滅を 防ぐため 人工の ヘドロ池が 作られ始めた。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくぶくろ" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手のどくのポケモンは、進化・退化してもどくが回復しない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくどくえき" },
			damage: 40,
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558354,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベトベター",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [89],
};

export default card;
