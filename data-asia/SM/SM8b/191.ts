import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 連結し サイコパワーは ２倍に。 ただし 賢さ自体は 変わっていない。",
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
				ja: "このポケモンについている[鋼]エネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551451,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [375],
};

export default card;
