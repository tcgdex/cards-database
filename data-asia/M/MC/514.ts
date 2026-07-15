import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマルex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しびればり" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "トゲトゲローリング" },
			damage: "80+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "前の自分の番に、このポケモンが「トゲトゲローリング」を使っていたなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863816,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [777],

	suffix: "EX",
};

export default card;
