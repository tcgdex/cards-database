import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "読み取るだけ ではなく 波動を 操る 力を 手に 入れた。 戦いにも 利用 するぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みきわめ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。次の相手の番の終わりまで、このポケモンは、相手のポケモンからワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サブマリンブロー" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561092,
			},
		},
	],

	evolveFrom: {
		ja: "リオル",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [448],
};

export default card;
