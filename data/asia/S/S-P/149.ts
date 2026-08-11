import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードラン",
		'zh-tw': "精靈球",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "マグマのように 燃えたぎる 血液が 体を 流れている。 火山の 洞穴に 生息する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 30,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "レイジングフレア" },
			damage: "80+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525425,
				tcgplayer: 597348,
			},
		},
	],

	retreat: 4,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [485],
};

export default card;
