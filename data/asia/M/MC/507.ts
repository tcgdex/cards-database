import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ギギアル",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'ja-jp': "回転方向を 変える ことで 仲間に 気持ちを 伝えている。 怒るほど 回転が 速くなる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かたいギア" },
			damage: 50,
			cost: ["Metal", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863809,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ギアル",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [600],
};

export default card;
