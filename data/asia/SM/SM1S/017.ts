import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "ピンチになると 目が 潤みだし 輝く。 その光に 群れる 仲間と 敵に 立ち向かうのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おくびょう" },
			effect: {
				ja: "自分の番に1回使える（最初の自分の番と、このポケモンを場に出した番はのぞく）。このポケモンについているカードをすべてトラッシュし、このポケモンを手札にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 10,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561694,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [746],
};

export default card;
