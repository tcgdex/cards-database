import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コソクムシ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "臆病で たくさんの 足を ばたつかせ 必死に 逃げまわる。 逃げたあとは ピカピカ 綺麗。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "にげごし" },
			effect: {
				ja: "最初の自分の番、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 30,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550521,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [767],
};

export default card;
