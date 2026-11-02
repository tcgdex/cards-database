import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "クレッフィ",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "昔の 貴族は 金庫の カギを 管理させる クレッフィを 代々 引き継ぎ 大切に 扱った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さしこみドロー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札を1枚トラッシュする。その後、自分の山札を2枚引く。",
			},
		},
		{
			name: { ja: "ひっかける" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863815,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [707],
};

export default card;
