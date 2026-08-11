import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーン",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "耳から 発する 超音波で 巨大な 岩も 粉砕する。 暗闇に 紛れて 襲いかかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "きょうしん" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがこんらんなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559620,
			},
		},
	],

	evolveFrom: {
		ja: "オンバット",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [715],
};

export default card;
