import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イダイナキバ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "近年 目撃例が ある。 イダイナキバという 名は ある本に 記された 生物から 取られた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきたおし" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "ふんぬとつげき" },
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863724,
			},
		},
	],

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [984],
};

export default card;
