import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガン",
	},

	illustrator: "Raita Kazama",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "カウンター" },
			damage: "10+",
			cost: ["Fighting"],
			effect: {
				ja: "前の相手の番に、このポケモンが受けたワザのダメージと同じダメージ追加。",
			},
		},
		{
			name: { ja: "ロックスマッシュ" },
			damage: 80,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908291,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [745],
};

export default card;
