import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードラン",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ようがんウォール" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはやけどのポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888244,
			},
		},
	],

	retreat: 4,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [485],
};

export default card;
