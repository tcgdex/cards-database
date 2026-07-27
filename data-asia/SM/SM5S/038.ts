import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "タテトプス",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "頑丈な 顔の おかげで 敵は 少なかったと 思われる。 太古の ジャングルに 棲んでいた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "とっしん" },
			damage: 50,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
		{
			name: { ja: "がちんこ" },
			damage: 80,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559992,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [410],
};

export default card;
