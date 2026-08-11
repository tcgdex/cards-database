import { Card } from "models/database/card";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタング",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'ja-jp': "２匹の ダンバルが 連結し サイコパワーは ２倍に。 ただし 賢さ自体は 変わっていない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "コアビーム" },
			damage: 80,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[鋼]エネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561438,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ダンバル",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [375],
};

export default card;
