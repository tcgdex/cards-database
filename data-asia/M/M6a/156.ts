import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイトEX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fairy"],

	stage: "MEGA",

	attacks: [
		{
			name: { ja: "ブリリアントアロー" },
			damage: "30×",
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[Y]エネルギーの合計×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908334,
			},
		},
	],

	retreat: 2,
	rarity: "Classic Collection",
	dexId: [282],

	suffix: "EX",
};

export default card;
