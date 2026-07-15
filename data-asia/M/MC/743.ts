import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのモンジャラ",
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひゃっかりょうらん" },
			effect: {
				ja: "自分の番に1回使える。自分の山札から「エリカのポケモン」を1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "しめつける" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864045,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [114],
};

export default card;
