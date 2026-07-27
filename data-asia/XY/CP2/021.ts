import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ホワイトキュレム",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はかいこうせん" },
			damage: 40,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "フレアブリザード" },
			damage: 120,
			cost: ["Fire", "Fire", "Water", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「フレアブリザード」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 563502,
				tcgplayer: 605352,
			},
		},
	],

	retreat: 3,
	rarity: "Rare",
	dexId: [646],
};

export default card;
