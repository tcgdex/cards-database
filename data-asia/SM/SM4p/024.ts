import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "レジアイス",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "氷河の 中で 数千年 眠っていたと 言われている。 マグマでも 体は 溶けない。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひょうざんのたて" },
			effect: {
				ja: "自分の場に「レジロック」がいるなら、このポケモンは、相手の2進化ポケモンからワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フロストスマッシュ" },
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560057,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [378],
};

export default card;
