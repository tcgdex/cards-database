import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "トロピウス",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "首の 房は １年に ２回 実を つける。 甘くて おいしい。 南国の 子供の おやつだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札にあるポケモンを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558974,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [357],
};

export default card;
