import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミミズズex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ボコスカがえし" },
			effect: {
				'ja-jp': "このポケモンが、相手のポケモンからワザのダメージを受けたとき、このポケモンについている[M]エネルギーの数×2個ぶんのダメカンを、ワザを使ったポケモンにのせる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "がんせきふうじ" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863835,
			},
		},
	],

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [968],

	suffix: "EX",
};

export default card;
