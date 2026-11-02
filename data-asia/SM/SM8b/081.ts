import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードラン",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "マグマのように 燃えたぎる 血液が 体を 流れている。 火山の 洞穴に 生息する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 30,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ボイラーインパクト" },
			damage: 130,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550891,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [485],
};

export default card;
