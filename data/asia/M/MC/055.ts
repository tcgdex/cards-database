import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ボクレー",
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "死んだ 子供の 魂が 切り株に 宿った ポケモン。 森を さまよい 仲間を 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やどりぎのタネ" },
			damage: 20,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863346,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [708],
};

export default card;
