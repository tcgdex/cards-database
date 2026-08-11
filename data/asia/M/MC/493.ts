import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エアームド",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "抜け落ちた 羽根は 薄く 鋭いので 刀として 使われていたことも あったらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はがねのつばさ" },
			damage: 50,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863795,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [227],
};

export default card;
