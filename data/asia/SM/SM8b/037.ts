import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "稲妻で 世界を 焼きつくせる 伝説の ポケモン。 理想の 世界を つくる 人を 補佐する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げきりん" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
		{
			name: { ja: "いかずちのやいば" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550671,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [644],
};

export default card;
