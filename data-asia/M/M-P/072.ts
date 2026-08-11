import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ジーランス",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "岩のように 硬い ウロコと 脂の 詰まった 浮袋で 深海の 水圧に 耐える。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "きおくにもぐる" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の進化しているポケモン全員は、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひれカッター" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871033,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [369],
};

export default card;
