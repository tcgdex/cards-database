import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "メリープ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "ふかふかの 体毛は 空気を たくさん 含んで 夏は 涼しく 冬は 温かいのが 特徴。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふわふわまくら" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558672,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [179],
};

export default card;
