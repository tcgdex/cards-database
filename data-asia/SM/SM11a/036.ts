import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "マケンカニ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "硬い ハサミは 攻めも 守りも 得意。 マケンカニ 同士の 戦いは ボクシングの ようだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジャブ" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "がちんこ" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556663,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [739],
};

export default card;
