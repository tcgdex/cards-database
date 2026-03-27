import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "わたもうふ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のワザのダメージを受けたとき、そのダメージを「30」少なくする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "テールスラップ" },
			damage: "60x",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "チラーミィ",
	},

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [573],

	suffix: "EX",
};

export default card;
