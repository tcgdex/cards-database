import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メルメタルex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アイアンスイング" },
			damage: "100×",
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×100ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863821,
			},
		},
	],

	evolveFrom: {
		ja: "メルタン",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [809],

	suffix: "EX",
};

export default card;
