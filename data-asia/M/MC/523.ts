import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドン",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "金属の ボディは 頑丈だが 熱が こもってしまうので 尻尾の スリットから 放熱している。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "がちんこ" },
			damage: 50,
			cost: ["Metal", "Metal"],
		},
		{
			name: { ja: "ジュラルビーム" },
			damage: 130,
			cost: ["Metal", "Metal", "Metal"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863825,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [884],
};

export default card;
