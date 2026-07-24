import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "磁力を 放って 相手を ひき寄せた ところで お尻の ツメで 切り裂くのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひきあうからだ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、このポケモンのにげるためのエネルギーは、自分のベンチの「ダンバル」の数ぶん少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559013,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [374],
};

export default card;
