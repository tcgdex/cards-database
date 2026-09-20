import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガン",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "非常に 気性が 荒い。 相手を 仕留めるためなら 自分が 傷つくことも 平気。",
	},

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
			type: "normal",
			thirdParty: {
				cardmarket: 908249,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [745],
};

export default card;
